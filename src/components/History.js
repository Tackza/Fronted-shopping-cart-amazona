import React, { useEffect, useState } from 'react'
import axios from '../config/axios'
import Header from './Header'
import { List, Avatar, Descriptions, Col } from 'antd'

let options = {  year: 'numeric', month: 'long', day: 'numeric' }

function History(props) {
    const [history, setHistory] = useState([])
    const [piece , setPiece] = useState(0)
    
    const newTime = history
    console.log(newTime)
    
    useEffect(() => {
        fetchListOrder()
    }, [])

    const fetchListOrder = async () => {
        const httpResponse = await axios.get('/history')
        let value = 0
        console.log(httpResponse.data)
        httpResponse.data.forEach(item => {
            value += (item.price * item.amount)
        })
        setPiece(value)
        setHistory(httpResponse.data)
    }
    console.log(history)
    return (
        <div>
            <Header setRole={props.setRole} />
            <Col xs={18} offset={3}>
            <List
                            itemLayout="horizontal"
                            header="PRODUCT"
                            bordered={false}    
                            dataSource={history}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar shape="square" size={64} src={item.Product.image} />}
                                        title={<a href="#">{item.product_name}</a>}
                                        description={`amount : ${item.amount} 
                                        price : ${Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.price * item.amount)}`}
                                    />
                                    <Descriptions.Item label="Order time">{new Date(item.createdAt).toLocaleDateString("de-DE",options)}</Descriptions.Item>
                                </List.Item>
                            )}
                        />
                        </Col>
        </div>
    )
}

export default History