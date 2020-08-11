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
        // console.log(product)
        // console.log(cart)
        const product_id = product.id //1
        let index = cart.findIndex(item => item.product_id === product.id)
        // console.log(index)
         console.log(cart[index])
        if (index !== -1) {
            const { amount, id } = cart[index]
            console.log(id)
            const item = await axios.put('/cart', {
                amount: amount + 1,
                id
            })
            console.log("put success")
            console.log(item)
        } else {
            const item = await axios.post('/cart/OrderProduct',
                {
                    amount: 1,
                    product_id
                })
            console.log("post success")
            console.log(item)
        }

    }

    const fetchProduct = async () => {
        const httpResponse = await axios.get('/product')
        setProduct(httpResponse.data)
        // console.log(httpResponse)
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
