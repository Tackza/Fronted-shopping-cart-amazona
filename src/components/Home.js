import React, { useState, useEffect } from 'react'
import './Home.css'
import { Row, Col } from 'antd'
import Product from './Product'
import axios from '../config/axios'


function Home() {
    const [product, setProduct] = useState([])

    const addToOrder = async (idx) => {
        const products = await axios.get('/product')
        const product = products.data[idx]
        const carts = await axios.get('/cart')
        const cart = carts.data
        // console.log(cart)
        let index = cart.findIndex(item => item.product_name == product.name)
        if (index !== -1) {
            const { total_product, id } = cart[index]
            // console.log(cart[index])
            const item = await axios.put('/cart', {
                total_product: total_product + 1,
                id
            })
            console.log("put success")
            console.log(item)
        } else {
            const item = await axios.post('/cart/OrderProduct',
                {
                    total_product: 1,
                    total_price: product.price,
                    status: "pending",
                    product_name: product.name
                })
            console.log("post success")
            console.log(item)
        }
    }

    const fetchProduct = async () => {
        const httpResponse = await axios.get('/product')
        setProduct(httpResponse.data)
        // console.log(product)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <Row justify="space-between">
            <Col span={6}>
                {product.map((item, idx) =>
                    <>
                        <Product item={item} id={idx} addToOrder={addToOrder} />
                    </>
                )}
            </Col>
        </Row>
    )


}


export default Home
