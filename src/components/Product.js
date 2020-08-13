import React from 'react'
import { Button, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'


function Product(props) {
    const {  image, name, price  } = props.item;

    return (

        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={image} />}
        >
            <Meta title={name} />
            <p> ราคา {price} บาท </p>
            <Button onClick={() => props.addToOrder(props.item)}>Add To Cart</Button>
        </Card>

    )
}

export default Product
