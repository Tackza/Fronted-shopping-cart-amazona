import React, { useState, useEffect } from 'react'
import './Home.css'
import { Row, Col, Carousel, notification } from 'antd'
import Product from './Product'
import axios from '../config/axios'
import Header from './Header'

const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '180px',
    textAlign: 'center',
    background: '#364d79',
    width: '100%'
};


function Home(props) {
    const [product, setProduct] = useState([])

    const addToOrder = async (item) => {
        console.log(item)
        const { id, name, amount } = item;
        await axios.put('/cart', {
            amount: 1,
            id,
            item
        });

        notification.open({
            message: 'คำสั่งซื้อสำเร็จ',
            description:
                `${name}`,
        });

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
            <Col span={24}>
                <Header setRole={props.setRole} />
            </Col>
            <Col span={24}>
                <Carousel autoplay>
                    <div>
                        <img style={contentStyle} src="https://www.extremeit.com/wp-content/uploads/2019/03/Notebook-promotion.jpg"></img>
                    </div>
                    <div>
                        <img style={contentStyle} src="https://notebookspec.com/web/wp-content/uploads/2018/11/Top20Notebook1.jpg"></img>
                    </div>
                    <div>
                        <img style={contentStyle} src="https://notebookspec.com/web/wp-content/uploads/2018/10/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7-notebook-desktop-01.jpg"></img>
                    </div>
                    <div>
                        <img style={contentStyle} src="https://images.droidsans.com/wp-content/uploads/2015/10/Surface-Pro-4-bananait.jpg"></img>
                    </div>
                </Carousel>,

            </Col>
            {product.map((item, idx) =>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Row justify="center">
                        <Product item={item} addToOrder={addToOrder} />
                    </Row>
                </Col>
            )}
        </Row>
    )


}


export default Home
