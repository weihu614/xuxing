import '@wangeditor/editor/dist/css/style.css'
import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { Button, Form, Input, message, Modal, Radio, Upload } from 'antd'
import { Cascader } from 'tdesign-react';
import 'tdesign-react/es/style/index.css'; // 少量公共样式
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const options = [
    {
        label: '前端',
        value: '前端',
        children: [
            {
                label: 'Vue',
                value: 'Vue',
            },
            {
                label: 'React',
                value: 'React',
            },
            {
                label: 'Angular',
                value: 'Angular',
            },
        ],
    },
    {
        label: '后端',
        value: '后端',
        children: [
            {
                label: 'Java',
                value: 'Java',
            },
            {
                label: 'Python',
                value: 'Python',
            },
        ],
    },
];

export default function Fabu() {
    const navigate = useNavigate()


    // editor 实例
    const [editor, setEditor] = useState(null)                   // JS 语法

    // 编辑器内容
    const [html, setHtml] = useState('hello')

    // 工具栏配置
    const toolbarConfig = {}                        // JS 语法

    // 编辑器配置
    const editorConfig = {                         // JS 语法
        placeholder: '请输入内容...',
    }


    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])


    const [flag, setFlag] = useState(false)
    const [val1, setVal1] = useState('')
    const [val2, setVal2] = useState([])
    let [val3, setVal3] = useState('')
    const [val4, setVal4] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        let card = val2.join(',')
        let obj = {
            title: val1,
            content: html,
            card: card,
            fengm: val3,
            cate: val4,
        }
        axios.post('http://localhost:3000/addcsdn', obj)
        message.success('发布成功')
        navigate('/Second')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>

            <div style={{ display: "flex", }}>
                <Input value={val1} onChange={(e) => { setVal1(e.target.value) }} placeholder="请输入文章标题(5-100字)" />
                <Button style={{ border: "1px solid orangered", color: "orangered" }}>保存草稿</Button>
                <Button type="primary" onClick={() => {
                    showModal()
                }}>发布文章</Button>

                <Modal title="发布文章" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >
                        <Form.Item label="文章标签" name="biaoqian">
                            <Cascader options={options} value={val2} onChange={(e) => { setVal2(e) }} multiple clearable />
                        </Form.Item>
                        <Form.Item label="添加封面" name="fengmian">
                            <Upload
                                action="http://localhost:3000/upload"
                                listType="picture"
                                className="upload-list-inline"
                                onChange={(e) => {
                                    if (e.file.response) {
                                        setVal3(val3 = e.file.response.path)
                                    }
                                }}
                            >
                                <Button>本地上传</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item label="文章类型" name="leixing">
                            <Radio.Group onChange={(e) => { setVal4(e.target.value); }}>
                                <Radio value={'原创'}>原创</Radio>
                                <Radio value={'转载'}>转载</Radio>
                                <Radio value={'翻译'}>翻译</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                        </Form.Item>
                    </Form>
                </Modal>

            </div>

            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <div style={{ display: "flex" }}>
                    <Editor
                        defaultConfig={editorConfig}
                        value={html}
                        onCreated={setEditor}
                        onChange={(editor) => { setHtml(editor.getHtml()); }}
                        mode="default"
                        style={
                            flag === false ?
                                { height: '400px', width: "50%", borderRight: "1px solid #ccc" }
                                : { height: '400px', width: "100%", borderRight: "1px solid #ccc" }}
                    />
                    <div>
                        <Button onClick={() => {
                            setFlag(true)
                        }}>隐藏</Button>
                        <Button onClick={() => {
                            setFlag(false)
                        }}>编辑</Button>
                    </div>
                    {flag === false ?
                        <div dangerouslySetInnerHTML={{ __html: html }} style={{ width: "50%", borderLeft: "1px solid #ccc" }}>
                        </div> : ""}
                </div>
            </div>
        </div >
    )
}
