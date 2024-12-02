import React, { useState } from 'react';
import { CameraOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Input, AutoComplete, Button } from 'antd';

const items = [
    {
        key: '1',
        type: 'group',
        label: 'Group title',
        children: [
            {
                key: '1-1',
                label: '1st menu item',
            },
            {
                key: '1-2',
                label: '2nd menu item',
            },
        ],
    },
    {
        key: '2',
        label: 'sub menu',
        children: [
            {
                key: '2-1',
                label: '3rd menu item',
            },
            {
                key: '2-2',
                label: '4th menu item',
            },
        ],
    },
];

const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

export default function Layout() {

    const [value, setValue] = useState('');
    const [anotherOptions, setAnotherOptions] = useState([]);
    const getPanelValue = (searchText) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    const onSelect = (data) => {
        console.log('onSelect', data);
    };
    const onChange = (data) => {
        setValue(data);
    };

    const addlog = () => {
        console.log(console.log(value));
    }

    return ( 
        <div>

            <div style={{ width: "100%", height: "50px", borderBottom: "1px solid black", display: "flex", justifyContent: "space-between" }}>

                <div style={{ width: "30%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <a>手机阿里</a>
                    <a style={{ cursor: "pointer" }} onClick={() => { message.success("点击成功") }}>中国大陆</a>
                    <a>请登录</a>
                    <a>免费注册</a>
                    <a>消息</a>
                </div>

                <div style={{ width: "60%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                我的阿里
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                我的阿里
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                我的阿里
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                我的阿里
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                我的阿里
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                我的阿里
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                我的阿里
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                我的阿里
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>

                </div>

            </div>

            <div style={{ width: "70%", marginTop: "8px", margin: "auto" }} >
                <SearchOutlined style={{ padding: "10px", border: "1px solid black" }} />
                <AutoComplete
                    value={value}
                    options={anotherOptions}
                    style={{
                        width: "90%",
                    }}
                    onSelect={onSelect}
                    onSearch={(text) => setAnotherOptions(getPanelValue(text))}
                    onChange={onChange}
                    placeholder="搜索 商品/供应商/找服务/图片地址"
                />
                <Button type="primary"
                    onClick={() => { addlog() }}
                >
                    搜索
                </Button>
            </div>

        </div >
    )
}
