import React, { useState, useEffect } from 'react'
import axios from '../config/axios'
import { Button } from 'antd'


function Cart(props) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)


    const orderConfirm = async (cart) => {
        console.log("confirm")
        // const newOrders = await axios.post("/order/insertOrder", { total_price:total })
        // console.log(newOrders.data)
        const order = await axios.get("/order/")
        const newOrder = order.data.pop()
        const history = cart.map(item => ({ product_name: item.Product.name, amount: item.amount, price: item.Product.price, order_id: newOrder.id }))
        console.log(history)
        const newHistory = await axios.post("/history/update", { history })
        console.log(newHistory)
        const deleteAllOrder = await axios.delete('/cart/all')
        console.log(deleteAllOrder)
    }

    const deleteOrder = async (id) => {
        await axios.delete(`/cart/${id}`)
        fetchListOrder()
    }

    useEffect(() => {
        fetchListOrder()
    }, [])

    const fetchListOrder = async () => {
        const cart = await axios.get('/cart');
        let value = 0
        cart.data.forEach(item => {
            value += (item.Product.price * item.amount)
        })
        console.log(cart.data)
        setTotal(value)
        setCart(cart.data)
    }
    return (
        <div>
            {cart.map(item => (
                <>
                    <div>{item.Product.name}</div>
                    <p> amount : {item.amount} , Price : {item.Product.price} </p>
                    <Button onClick={() => deleteOrder(item.id)}>Delete </Button>
                </>
            ))}
            <Button onClick={() => orderConfirm(cart)}>confirm</Button>
            <div>total : {total}  </div>

        </div>
    )
}

export default Cart
