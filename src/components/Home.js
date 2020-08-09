import React, { useState, useEffect } from 'react'
import './Home.css'
import { Row, Col } from 'antd'
import Product from './Product'
import axios from '../config/axios'




function Home() {
    const [product, setProduct] = useState([])

    const addToOrder = async (id) => {
        await axios.post('/order/selectProduct', { product_id: id })
    }

    const fetchProduct = async () => {
        const httpResponse = await axios.get('/product')
        setProduct(httpResponse.data)
        console.log(product)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <Row justify="space-between">
            <Col span={6}>
                {product.map((item, id) =>
                    <Product item={item} id={id} addToOrder={addToOrder} />
                )}
            </Col>
        </Row>
    )


}


export default Home
