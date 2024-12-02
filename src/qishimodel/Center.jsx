import { ArrowLeft, Edit, ShopO, UserO, VolumeO } from "@react-vant/icons";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Cell, Grid, Image, NavBar, NoticeBar, Sticky } from "react-vant";
import { addFunc } from "usewsdfghjize";

const options = [
  { id: 1, text: "我的简历", icon: <ShopO />, path: "/My_info" },
  { id: 2, text: "已申请", icon: <ShopO />, path: "/" },
  { id: 3, text: "被关注", icon: <ShopO />, path: "/" },
  { id: 4, text: "面试邀请", icon: <ShopO />, path: "/" },
  { id: 5, text: "视频面试", icon: <ShopO />, path: "/" },
  { id: 6, text: "我的收藏", icon: <ShopO />, path: "/" },
  { id: 7, text: "浏览足迹", icon: <ShopO />, path: "/" },
  { id: 8, text: "关注公司", icon: <ShopO />, path: "/" },
];

export default function Center() {
  const navigate = useNavigate();

  return (
    <div>
      <Sticky>
        <NavBar
          title="会员中心"
          leftText={<ArrowLeft />}
          onClickLeft={() => Toast("返回")}
          rightText={<UserO />}
          onClickRight={() => Toast("按钮")}
        />
      </Sticky>
      <Cell
        center
        title={`Avatar`}
        label={
          <span
            onClick={() => {
              navigate("/My_info");
            }}
          >
            <Edit />
            编辑我的简历
          </span>
        }
        icon={<Image width={44} height={44} src="/demo_1.jpg" round />}
      />
      <NoticeBar
        leftIcon={<VolumeO />}
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
      <Grid square>
        {options.map((i) => (
          <Grid.Item
            key={i.id}
            icon={i.icon}
            text={i.text}
            onClick={() => {
              navigate(`${i.path}`);
            }}
          />
        ))}
      </Grid>
      <div>
        <Button
          type="primary"
          onClick={() => {
            console.log(addFunc(20, 30));
          }}
        >
          该死的npm包
        </Button>
      </div>
    </div>
  );
}
