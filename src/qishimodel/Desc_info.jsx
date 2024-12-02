import { ArrowLeft, UserO } from '@react-vant/icons'
import React, { useRef, useState } from 'react'
import '@nutui/nutui-react/dist/style.css'
import { Button, DatetimePicker, Field, NavBar, Picker, Radio } from 'react-vant'
import { Form, Input } from 'antd-mobile'
import { Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

const columns = [
    '南京',
    '苏州',
    '常州',
    '淮安',
    '扬州',
    '南通',
    '宿迁',
    '泰州',
    '无锡',
]

const columns2 = [
    '未婚',
    '已婚',
    '离异',
    '丧偶',
]

export default function Desc_info() {
    const [time, setTime] = useState(new Date())
    const [work, setWork] = useState(new Date())
    const [value, setValue] = useState('')
    const [hun, setHun] = useState('')

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(info.file.response.path);
            });
        }
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                上传头像
            </div>
        </button>
    );

    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [phone, setPhone] = useState('')
    const [vx, setVx] = useState('')
    const [adres, setAdres] = useState('')

    const updinfo = async () => {
        let obj = {
            name: name,
            sex: sex,
            phone: phone,
            vx: vx,
            adres: adres,
            time: time,
            work: work,
            value: value,
            hun: hun,
            path: imageUrl,
        }
        console.log(obj);
    }

    return (
        <div>

            <NavBar
                title='基本资料'
                leftText={<ArrowLeft />}
                onClickLeft={() => Toast('返回')}
                rightText={<UserO />}
                onClickRight={() => Toast('按钮')}
            />

            <div style={{
                width: "100px", height: "100px", margin: "auto"
            }}>
                <Upload
                    style={{

                    }}
                    name="file"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="http://localhost:3000/upload"
                    onChange={handleChange}
                    beforeUpload={beforeUpload}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                                width: '100%',
                                borderRadius: '50%',
                                height: '100px',
                                objectFit: 'cover',
                            }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
            </div>

            <Form layout='horizontal'>
                <Form.Item label='姓名' name='name'>
                    <Input value={name} onChange={(e) => { setName(e) }} placeholder='请输入姓名' clearable />
                </Form.Item>
                <Form.Item label='性别' name='sex'>
                    <Radio.Group value={sex} onChange={(e) => { setSex(e) }} direction="horizontal">
                        <Radio name="男">男</Radio>
                        <Radio name="女">女</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>


            <DatetimePicker
                popup={{
                    round: true,
                }}
                type='date'
                minDate={new Date(2021, 0, 1)}
                maxDate={new Date(2025, 10, 1)}
                value={time}
                onConfirm={setTime}
            >
                {(val, _, actions) => {
                    return (
                        <Field
                            readOnly
                            clickable
                            label='出生日期'
                            value={val.toLocaleDateString()}
                            placeholder='请选择日期'
                            onClick={() => actions.open()}
                        />
                    )
                }}
            </DatetimePicker>

            <DatetimePicker
                popup={{
                    round: true,
                }}
                type='date'
                minDate={new Date(2021, 0, 1)}
                maxDate={new Date(2025, 10, 1)}
                value={work}
                onConfirm={setWork}
            >
                {(val, _, actions) => {
                    return (
                        <Field
                            readOnly
                            clickable
                            label='开始工作时间'
                            value={val.toLocaleDateString()}
                            placeholder='请选择日期'
                            onClick={() => actions.open()}
                        />
                    )
                }}
            </DatetimePicker>

            <Picker
                popup={{
                    round: true,
                }}
                value={value}
                columns={columns}
                onConfirm={setValue}
            >
                {(val, _, actions) => {
                    return (
                        <Field
                            readOnly
                            clickable
                            label='最高学历'
                            value={val || ''}
                            placeholder='请选择学历'
                            onClick={() => actions.open()}
                        />
                    )
                }}
            </Picker>

            <Form layout='horizontal'>
                <Form.Item label='联系电话' name='phone'>
                    <Input value={phone} onChange={(e) => { setPhone(e) }} placeholder='请输入电话号码' clearable />
                </Form.Item>
                <Form.Item label='微信' name='vx'>
                    <Input value={vx} onChange={(e) => {
                        setVx(e)
                    }} placeholder='请输入微信号' clearable />
                </Form.Item>
                <Form.Item label='现居住地' name='adres'>
                    <Input value={adres} onChange={(e) => { setAdres(e) }} placeholder='请输入地址' clearable />
                </Form.Item>
            </Form>

            <Picker
                popup={{
                    round: true,
                }}
                value={hun}
                columns={columns2}
                onConfirm={setHun}
            >
                {(val, _, actions) => {
                    return (
                        <Field
                            readOnly
                            clickable
                            label='婚姻状况'
                            value={val || ''}
                            placeholder='请选择婚姻'
                            onClick={() => actions.open()}
                        />
                    )
                }}
            </Picker>
            <Button
                onClick={() => {
                    updinfo()
                }}
                style={{ width: "80%", marginLeft: '40px', marginTop: "50px" }}
                round type='primary'
            >
                保存
            </Button>
        </div >
    )
}
