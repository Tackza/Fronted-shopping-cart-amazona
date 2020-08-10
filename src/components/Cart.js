import React, { useState, useEffect } from 'react'
import axios from '../config/axios'
import { Button } from 'antd'

function Cart(props) {
    const [order, setOrder] = useState([])

    const orderConfirm = (order) => {
        // console.log(order)
        order.forEach( async item => {
            console.log("post order run")
            console.log(item)
            await axios.post('/order/insertOrder', item)
        })
    }

    const deleteOrder = async (id) => {
        await axios.delete(`/cart/${id}`)
        fetchListOrder()
    }

    useEffect(() => {
        fetchListOrder()
    }, [])

    const fetchListOrder = async () => {
        const httpResponse = await axios.get('/cart')
        setOrder(httpResponse.data)
    }
    return (
        <div>
            {order.map(item => (
                <>
                    <div>{item.product_name}</div>
                    <Button onClick={() => deleteOrder(item.id)}>Delete </Button>
                </>
            ))}
            <Button onClick={() => orderConfirm(order)}>confirm</Button>

        </div>
    )
}

export default Cart
