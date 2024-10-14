import { Button, Card, Flex, Image, Typography } from 'antd'
import plantData from './../planData';

const ProductsList = () => {
  const { Meta } = Card;
  return (
    <div>
      <Flex align="center" justify="space-between">
        <Typography.Title level={3} strong className='primary--color'>
          My List
        </Typography.Title>
        <Button type='link' className='gray--color'>
          View All
        </Button>
      </Flex>
      <Flex align="center" gap="large">
        {plantData?.map((plant) => (
          <Card key={plant?.id} hoverable className='plant-card'>
            <Image src={plant?.picture} style={{ width: "130px" }} />
            <Meta title={plant?.name} style={{ marginTop: "1rem" }} />
          </Card>
        ))}
      </Flex>
    </div>
  )
}

export default ProductsList