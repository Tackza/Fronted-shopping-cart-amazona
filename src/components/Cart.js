import React, { useState, useEffect } from 'react'
import axios from '../config/axios'
import { Button, Avatar, List, Row, Col, Card } from 'antd'
import Header from './Header'
import { Link } from 'react-router-dom'

let id = 1
const gridStyle = {
    width: '180%',
    textAlign: 'center',
}

function Cart(props) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    

    const fetchListOrder = async () => {
        const cart = await axios.get('/cart');
        let value = 0
        console.log(cart.data)
        cart.data.forEach(item => {
            value += (item.Product.price * item.amount)
        })
        setTotal(value)
        setCart(cart.data)
    }

    const orderConfirm = async (cart) => {
        const history = cart.map(item => ({
            product_name: item.Product.name,
            amount: item.amount,
            price: item.Product.price,
            user_id: item.user_id,
            product_id : item.Product.id
        }))

        const deleteAllOrder = await axios.delete('/cart')
        console.log("delete success")
        console.log(cart)
        await axios.post("/history/update", { history })
        fetchListOrder()


    }

    const deleteOrder = async (id) => {
        await axios.delete(`/cart/${id}`)
        fetchListOrder()
    }

    useEffect(() => {
        fetchListOrder()
    }, [])

    return (
        <div>
            <Header />
            
            <Row justify='center' >
                <Col offset={1} xs={13}>

                    <List
                        itemLayout="horizontal"
                        header="PRODUCT"
                        bordered={false}
                        dataSource={cart}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar shape="square" size={64} src={item.Product.image} />}
                                    title={<a href="#">{item.Product.name}</a>}
                                    description={`amount : ${item.amount} 
                                    price : ${Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.Product.price)} `}
                                />
                                <Button type="danger" onClick={() => deleteOrder(item.id)}>Delete </Button>
                            </List.Item>
                        )}
                    />

                </Col>

                <Col xs={10}>
                    <Row justify="center">
                        <div className="site-card-border-less-wrapper">
                            <Card title="Total product" bordered={false} style={gridStyle}>
                                <p>total : {Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(total)}  </p>
                                <Link to='/success'>
                                 <Button type="primary" onClick={() => orderConfirm(cart)}>Confirm Order</Button>
                                </Link>
                            </Card>
                        </div>,
                    </Row>
                </Col>
            </Row>


        </div>
    )
}

export default Cart