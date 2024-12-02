import { Button } from 'antd'
import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function App() {

  const navigate = useNavigate()
  return (
    <div>

      <div style={{ width: '100%', display: "flex" }}>
        <div style={{
          width: "5%", height: "200px", display: "flex",
          flexWrap: "wrap", justifyContent: "space-around",
          alignItems: "center", backgroundColor: "#ccc"
        }}>
          <Button type='primary' onClick={() => { navigate('/Fabu') }}>发布</Button>
          <NavLink to='/Second'>Second</NavLink>
          <NavLink to='/Third'>Third</NavLink>
        </div>

        <div style={{ width: "95%" }}>
          <Outlet></Outlet>
        </div>
      </div>

    </div>
  )
}
