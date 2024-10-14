
import { Button, Flex, Layout } from 'antd'
import './App.css'
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import SiderBar from './component/SiderBar';
import { CustomHeader } from './component/Header';
import MainContent from './component/MainContent';
import SiderContent from './component/SideContent';

const { Sider, Header, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='sider'>
        <SiderBar>

        </SiderBar>
        <Button type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => {
            setCollapsed(!collapsed)
          }}
          className='triger-btn'
        />
      </Sider>
      <Layout>
        <Header className='header'>

          <CustomHeader />
        </Header>
        <Content className='content' >
          <Flex gap={"large"}>
            <MainContent />
            <SiderContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
