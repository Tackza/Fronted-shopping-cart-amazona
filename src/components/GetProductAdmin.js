// import React, { useEffect, useState } from 'react'

// import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';



// function GetProductAdmin(props) {
//     const [product2, setProduct2] = useState([])

//     const fetchProduct = async () => {
//         const getProduct2 = await axios.get('/product')
//         setProduct2(getProduct2.data)
//     }
//     useEffect(() => {
//         fetchProduct()
//     }, [])

//     const deleteProduct = async (id) => {
//         await axios.delete(`/product/${id}`)
//         fetchProduct()
//     }

//     console.log(product2)

   

//         return (
//             <Form form={form} component={false}>
//                 <Table
//                     components={{
//                         body: {
//                             cell: EditableCell,
//                         },
//                     }}
//                     bordered
//                     dataSource={data}
//                     columns={mergedColumns}
//                     rowClassName="editable-row"
//                     pagination={{
//                         onChange: cancel,
//                     }}
//                 />
//             </Form>
//         );
//     };

//     export default GetProductAdmin





import React, { useState, useEffect } from 'react';
import axios from '../config/axios'
import MaterialTable from 'material-table';

export default function GetProductAdmin(props) {
    const [product, setProduct] = useState([])
    const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Category', field: 'category' },
      { title: 'Price', field: 'price', type: 'numeric' },
      { title: 'Image url',field: 'image'}
    ],
    // data: [
    //   { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //   {
    //     name: 'Zerya Betül',
    //     surname: 'Baran',
    //     birthYear: 2017,
    //     birthCity: 34,
    //   },
    // ],
  });   


    const fetchProduct = async () => {
        const getProduct = await axios.get('/product')
        setProduct(getProduct.data)
    }
    useEffect(() => {
        fetchProduct()
    }, [])

    // const deleteProduct = async (id) => {
    //     await axios.delete(`/product/${id}`)
    //     fetchProduct()
    // }
console.log(product)
  return (
    <MaterialTable
      title="Editable Product"
      columns={state.columns}
      data={product}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.product];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.product];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.product];
                console.log(data)
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}