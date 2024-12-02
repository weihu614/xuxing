import { AddO, Arrow, ArrowLeft, Edit, GoldCoinO, LocationO, UserO } from '@react-vant/icons'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Cell, Field, Image, NavBar, Picker, Tag } from 'react-vant'


const columns = [
    '观望有好的机会在考虑',
    '在职，看机会',
    '离职，随时到岗',
    '在职，暂不考虑',
    '在职，考虑机会',
    '在职，考虑其他机会',
    '在职，考虑其他工作',
]
export default function My_info() {

    const navigate = useNavigate()

    const [statu, setStatu] = useState('在职')

    return (
        <div>

            <NavBar
                title='我的简历'
                leftText={<ArrowLeft />}
                onClickLeft={() => Toast('返回')}
                rightText={<UserO />}
                onClickRight={() => Toast('按钮')}
            />

            <Cell
                center
                title={`Avatar`}
                label={`${29}·${'五年'}·${'学历'}`}
                icon={<Image width={44} height={44} src='/demo_1.jpg' round />}
                rightIcon={<Edit fontSize={20} onClick={() => { navigate('/Desc_info') }} />}
                isLink
            />

            <Cell.Group title='求职意向'>
                <Picker
                    popup={{
                        round: true,
                    }}
                    value={statu}
                    columns={columns}
                    onConfirm={setStatu}
                >
                    {(val, _, actions) => {
                        return (
                            <Field
                                readOnly
                                clickable
                                label='求职状态'
                                value={val || ''}
                                placeholder='请选择当前状况'
                                onClick={() => actions.open()}
                            />
                        )
                    }}
                </Picker>

                <Cell onClick={()=>{navigate('/Think')}} center title='程序员' value={<Arrow />}
                    label={
                        <>
                            <p><LocationO />上海，北京</p>
                            <p><GoldCoinO />25000-30000</p>
                        </>
                    }
                />
            </Cell.Group>

            <Cell.Group title='特长标签'>
                <Cell isLink rightIcon={<AddO fontSize={20} />}>
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <Tag key={index} type='primary' plain style={{ marginLeft: '10px' }}>标签</Tag>
                        ))
                    }
                </Cell>
            </Cell.Group>
            <Cell.Group title='教育经历'>

            </Cell.Group>
            <Cell.Group title='工作经理'>

            </Cell.Group>

            <Button style={{ width: "60%", marginLeft: '80px', marginTop: "50px" }}
                round type='primary' >预览简历</Button>
        </div>
    )
}
