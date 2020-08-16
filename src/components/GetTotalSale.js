import React, { useState, useEffect } from 'react'
import axios from '../config/axios'


function GetTotalSale() {

    const [item, setItem] = useState([])
    const [total, setTotal] = useState(0)

    const fetchItem = async () => {
        const itemList = await axios.get('/history/all')
        let value = 0
        itemList.data.forEach(item => {
            value += (item.price * item.amount)
        })
        setItem(itemList.data)
        setTotal(value)
    }

    useEffect(() => {
        fetchItem()
    }, [])

    console.log(item)
    return (

        <div>
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">price</th>
                        <th scope="col">amount</th>
                    </tr>
                </thead>

                <tbody>
                    {item.map(list =>
                        <tr>
                            <th scope="row">{list.id}</th>
                            <td>{list.product_name}</td>
                            <td>{Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(list.price)}</td>
                            <td>{list.amount}</td>
                        </tr>
                    )}
                </tbody>
                <caption>total : {Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(total)}  </caption>

            </table>
        </div>

    )
}

export default GetTotalSale
