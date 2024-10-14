import { Flex } from 'antd'
import React from 'react'
import Banner from './Banner'
import ProductsList from './ProductsList'
import SellerList from './SellerList'


function MainContent() {
  return (
    <div style={{
      flex: 1,
    }}>
      <Flex vertical gap={"2.3rem"}>
        <Banner />
        <ProductsList />
        <SellerList />
      </Flex>

    </div>

  )
}

export default MainContent