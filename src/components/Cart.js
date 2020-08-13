import React, { useState, useEffect } from 'react'
import axios from '../config/axios'
import { Button } from 'antd'

let id = 1

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
        }))
        const deleteAllOrder = await axios.delete('/cart')
        console.log("delete success")
        
        console.log(history)
        await axios.post("/history/update", { history })
        fetchListOrder()

        // const order = cart.map(item => ({ 
        //     total_price: item.amount 
        // }))
        // console.log(order)
        // await axios.post('/order/insertOrder', { order})

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
            {cart.map(item => (
                <>
                    <div>{item.Product.name}</div>
                    <img src={item.Product.image} style={{ width: "10%" }}></img>
                    <p> amount : {item.amount} , Price : {item.Product.price} Baht</p>
                    <Button onClick={() => deleteOrder(item.id)}>Delete </Button>
                </>
            ))}

            <div>
                <Button onClick={() => orderConfirm(cart)}>confirm</Button>
                <div>total : {total}  </div>
            </div>

        </div>
    )
}

export default Cart
