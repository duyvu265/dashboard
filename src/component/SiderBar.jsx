import { Flex, Menu } from 'antd'
import React from 'react'
import { FaLeaf } from 'react-icons/fa6'
import { UserOutlined, ProfileOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'

function SiderBar() {
  return (
    <div>
      <Flex align="center" justify="center">
        <div className='logo'>
          <FaLeaf />
        </div>
      </Flex>
      <Menu mode='inline' defaultSelectedKeys={["1"]} className='menu-bar'
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: "DashBoard"
          },
          {
            key: '2',
            icon: <ProfileOutlined />,
            label: "List Users"
          },
          {
            key: '3',
            icon: <LogoutOutlined />,
            label: "Logout"
          },
          {
            key: '4',
            icon: <OrderedListOutlined />,
            label: "To Do"
          },
          {
            key: '5',
            icon: <CarryOutOutlined />,
            label: "My Orders"
          }, {
            key: '6',
            icon: <SettingOutlined />,
            label: "Setting"
          }
        ]} />
    </div>
  )
}

export default SiderBar