import React, { useState, useEffect } from 'react'
import axios from '../config/axios'

function GetTotalSale() {

    const [item ,setItem] = useState([])

    const fetchItem = async() => {
        const itemList = await axios.get('/history/all')
        setItem(itemList.data)
    }

    useEffect(() => {
        fetchItem()
    }, [])
    console.log(item)
    return (
        <div>
            {item.map(items => 
                <div>{items.product_name}</div>
            )}
        </div>
    )
}

export default GetTotalSale
