import { ArrowLeft, UserO } from '@react-vant/icons'
import React, { useState } from 'react'
import { Field, NavBar, Picker } from 'react-vant'

export default function Think() {

    const [val1, setVal1] = useState('')
    const [val2, setVal2] = useState('')
    const [val3, setVal3] = useState('')
    const [val4, setVal4] = useState('')

    const columns1 = ['全职', '兼职', '实习']
    const columns2 = [
        {
            text: '程序员',
            value: '程序员',
            children: [
                {
                    text: '前端工程师',
                    value: '前端工程师',
                },
                {
                    text: '后端工程师',
                    value: '后端工程师',
                },
                {
                    text: '全栈工程师',
                    value: '全栈工程师',
                }
            ],
        },
        {
            text: '设计师',
            value: '设计师',
            children: [
                {
                    text: 'UI设计师',
                    value: 'UI设计师',
                },
                {
                    text: 'UX设计师',
                    value: 'UX设计师',
                },
                {
                    text: '平面设计师',
                    value: '平面设计师',
                }
            ]
        }
    ]

    return (
        <div>

            <NavBar
                title='求职意向'
                leftText={<ArrowLeft />}
                onClickLeft={() => Toast('返回')}
                rightText={<UserO />}
                onClickRight={() => Toast('按钮')}
            />

            <Picker
                popup={{
                    round: true,
                }}
                value={val1}
                columns={columns1}
                onConfirm={setVal1}
            >
                {(val, _, actions) => {
                    return (
                        <Field
                            readOnly
                            clickable
                            label='工作性质'
                            value={val || ''}
                            onClick={() => actions.open()}
                        />
                    )
                }}
            </Picker>

            <Picker
                popup={{
                    round: true,
                }}
                value={val2}
                columns={columns2}
                onConfirm={setVal2}
            >
                {(val, _, actions) => {
                    return (
                        <Field
                            readOnly
                            clickable
                            label='期望职位'
                            value={val || ''}
                            onClick={() => actions.open()}
                        />
                    )
                }}
            </Picker>

            <Picker
                popup={{
                    round: true,
                }}
                value={val3}
                columns={columns3}
                onConfirm={setVal3}
            >
                {(val, _, actions) => {
                    return (
                        <Field
                            readOnly
                            clickable
                            label='期望地区'
                            value={val || ''}
                            onClick={() => actions.open()}
                        />
                    )
                }}
            </Picker>

        </div>
    )
}
