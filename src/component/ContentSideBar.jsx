import { Card, Flex, Image, Typography } from 'antd'
import React from 'react'

function ContentSideBar() {
  return (
    <div>
      <Card className='card'>
        <Flex vertical gap={"large"}>
          <Typography.Title level={4} strong>
            Today <br /> 5 Order
          </Typography.Title>
          <Typography.Title level={4} strong>
            This Month  <br /> 250 Order
          </Typography.Title>
        </Flex>
        <Image src="https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-indoor-plant-flowerpot-png-image_11669796.png"
          alt='plant'
          style={{
            position: 'absolute',
            bottom: -50,
            left: 120,
            height: 300,
            width: "auto"
          }}
        />
      </Card>
    </div>
  )
}

export default ContentSideBar