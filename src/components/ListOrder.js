import React, { useState, useEffect } from 'react'
import axios from '../config/axios'

function ListOrder(props) {
    const [order, setOrder] = useState([])


    useEffect((props) => {
        fetchListOrder()
    }, [])

    const fetchListOrder = async () => {
        const httpResponse = await axios.get('/order')
        setOrder(httpResponse.data)
    }
    return (
        <div>
            asdasd
            {order.map(item => (
                <div>{item.name}</div>
            ))}
        </div>
    )
}

export default ListOrder
