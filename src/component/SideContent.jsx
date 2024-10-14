import { Flex } from 'antd'
import React from 'react'
import ContentSideBar from './ContentSideBar'
import Activity from './Activity'

function SideContent() {
  return (
    <Flex vertical gap={"2.3rem"} style={{ width: 350 }}>
      <ContentSideBar />
      <Activity />
    </Flex>
  )
}

export default SideContent