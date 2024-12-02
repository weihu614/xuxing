import React, { useEffect, useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Image, Drawer, List, message, Space } from 'antd';
import axios from 'axios';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default function Second() {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const [idx, setIdx] = useState({})

    const [data, setData] = useState([])

    const getdata = async () => {
        let { data } = await axios.get('http://localhost:3000/getcsdn')
        setData(data.data)
    }


    useEffect(() => {
        getdata()
    }, [])

    return (
        <div>

            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        key={item._id}
                        actions={[
                            <IconText icon={StarOutlined} text={item.shouc} key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text={item.dianz} key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text={item.pingl} key="list-vertical-message" />,
                        ]}
                        extra={[
                            <a onClick={() => {
                                setIdx(item)
                                showDrawer()
                            }} >查看数据</a>,
                            '|',
                            <a onClick={() => {
                                axios.delete('http://localhost:3000/delcsdn', {
                                    params: {
                                        _id: item._id
                                    }
                                }).then(res => {
                                    message.success('删除成功')
                                    getdata()
                                })
                            }}>删除</a>
                        ]}
                    >
                        <List.Item.Meta
                            title={<a href={item.href}>{item.title}</a>}
                            description={`${item.cate}----${item.card}`}
                        />
                        <div>{new Date(item.time).toLocaleString()}</div>
                    </List.Item>
                )}
            />


            <Drawer title={idx.title} onClose={onClose} open={open}>
                <p dangerouslySetInnerHTML={{ __html: idx.content }}></p>
                <p>{idx.card}</p>
                <p>{idx.cate}</p>
                <Image
                    width={200}
                    src={idx.fengm}
                />
            </Drawer>
        </div>
    )
}
