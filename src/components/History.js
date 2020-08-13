import React, { useEffect, useState } from 'react'
import axios from '../config/axios'



function History(props) {
    const [history, setHistory] = useState([])
    
    useEffect(() => {
        fetchListOrder()
    }, [])

    const fetchListOrder = async () => {
        const httpResponse = await axios.get('/history')
        setHistory(httpResponse.data)
    }
    console.log(history)
    return (
        <div>
            {history.map(item => (
                <>
                    <div>{item.product_name}</div>
                </>
            ))}
        </div>
    )
}

export default History
