import React, { useState, useEffect } from 'react'
import { Input, Select, Form, notification, Button, Row, Col, Menu } from 'antd';
import Header from './Header';
import { LockOutlined, MailOutlined, AppstoreOutlined, WalletOutlined, GiftOutlined, TeamOutlined } from '@ant-design/icons';
import axios from '../config/axios';
import GetProductAdmin from './GetProductAdmin';
import GetTotalSale from './GetTotalSale';
import Member from './Member';

const { SubMenu } = Menu;

function Admin(props) {
    const [product, setProduct] = useState([])
    const [index, setIndex] = useState(10)

    const onFinish = values => {
        console.log('Received values of form: ', values);
        const body = {
            name: values.productName,
            category: values.category,
            price: values.price,
            image: values.image
        }
        axios.post('/product', body)
            .then(res => {
                notification.success({
                    message: "Add Product Success"
                })
            })
            .catch(err => {
                notification.error({
                    message: "Can't Add Product"
                })
            });
    }
    function handleClick(e) {
        console.log('click', e);
    }




    const addProduct = (
        <Form labelCol={{ span: 6 }}
            wrapperCol={{ span: 10 }}
            layout="horizontal"
            onFinish={onFinish}
        >
            <Form.Item
                label="Product Name"
                name="productName"
                rules={[{ required: true, message: 'Please input Product Name!' }]}
                prefix={<LockOutlined className="site-form-item-icon" />}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: 'Please input Category!' }]}
            >
                <Select placeholder="Select">
                    <Select.Option value="Asus">Asus</Select.Option>
                    <Select.Option value="Apple">Apple</Select.Option>
                    <Select.Option value="HP">HP</Select.Option>
                    <Select.Option value="Dell">Dell</Select.Option>
                    <Select.Option value="Acer">Acer</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: 'Please input Price!' }]}
            >
                <Input prefix="฿" suffix="BTH" />
            </Form.Item>
            <Form.Item
                label="Image"
                name="image"
                rules={[{ required: true, message: 'Please input Image' }]}
            >
                <Input prefix="Url : " />
            </Form.Item>
            <Button className="Button" type="primary" htmlType="submit" style={{ width: "100px" }}>
                submit
                        </Button>
        </Form>
    )


    const updateProduct = (
        <Row >
            <Col offset={1}>
                <GetProductAdmin />
            </Col>
        </Row >
    )

    const totalSale = (
        <Row>
            <Col offset={1}>
                <GetTotalSale />
            </Col>
        </Row>

    )

    const totalMember = (
        <Row>
            <Col offset={1}>
                <Member />
            </Col>
        </Row>
    )

    const tabComponent = [addProduct, updateProduct, totalSale, totalMember]
    return (
        <>
            <Header setRole={props.setRole} />
            <Row>

                <Col lg={6}>
                    <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
                        <SubMenu key="sub1" icon={<GiftOutlined />} title="Product">
                            <Menu.Item key="9" onClick={() => setIndex(0)}>Add Product</Menu.Item>
                            <Menu.Item key="10" onClick={() => setIndex(1)}>Update Product</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="12" icon={<TeamOutlined />} title="Total membership" onClick={() => setIndex(3)}>Total membership</Menu.Item>
                        <Menu.Item key="11" icon={<WalletOutlined />} title="Total sale" onClick={() => setIndex(2)}>Total sale</Menu.Item>
                    </Menu>
                </Col>

                <Col lg={15}>
                    {tabComponent[index]}
                </Col>
            </Row>
        </>
    )
}

export default Admin
