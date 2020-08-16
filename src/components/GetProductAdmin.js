import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../config/axios'
import { List } from 'antd/lib/form/Form'
import Avatar from 'antd/lib/avatar/avatar'
import { Descriptions } from 'antd'
import EditProduct from './EditProduct'



function GetProductAdmin() {
 

  const [product, setProduct] = useState([])

  // let options = { year: 'numeric', month: 'long', day: 'numeric' }

  const fetchProduct = async () => {
    const httpResponse = await axios.get('/product')
    setProduct(httpResponse.data)
  }


  useEffect(() => {
    fetchProduct()
  }, [])

  const deleteTodoItem = async (id) => {
    await axios.delete(`/product/${id}`);
    fetchProduct();
  }

 
  return (
    <div>
      {product.map(item => 
        <EditProduct item={item} fetchProduct={fetchProduct} delete={deleteTodoItem}/>
        )}
        </div>
  )
}

export default GetProductAdmin
