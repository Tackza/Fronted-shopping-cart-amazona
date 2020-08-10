import React, { useEffect, useState } from 'react'
import axios from '../config/axios'



function History() {
    const [history, setHistory] = useState([])
    
    useEffect(() => {
        fetchListOrder()
    }, [])

    const fetchListOrder = async () => {
        const httpResponse = await axios.get('/order')
        setHistory(httpResponse.data)
    }
    return (
        <div>32132121321
            {history.map(item => (
                <>
                    <div>{item.product_name}</div>
                </>
            ))}
        </div>
    )
}

export default History
