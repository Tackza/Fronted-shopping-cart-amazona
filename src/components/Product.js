import React from 'react'
import { Button, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'


function Product(props) {


    return (

        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={props.item.image} />}
        >
            <Meta title={props.item.name} />
            <p> ราคา {props.item.price} บาท </p>
            {props.item.id}
            <Button onClick={() => props.addToOrder(props.id)}>Add To Cart</Button>
        </Card>

    )
}

export default Product
