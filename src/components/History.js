import React, { useEffect, useState } from 'react'
import axios from '../config/axios'
import Header from './Header'



function History(props) {
    const [history, setHistory] = useState([])

    const newTime = history
    console.log(newTime)
    
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
            <Header/>
            {history.map(item => (
                <>
                    <div>{item.product_name}</div>
                    <p>{item.createdAt}</p>
                </>
            ))}
        </div>
    )
}

export default History