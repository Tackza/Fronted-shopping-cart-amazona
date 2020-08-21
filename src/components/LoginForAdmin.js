import React from 'react'
import { Row, Col, Divider, Input, Button, Form, notification } from 'antd'
import axios from '../config/axios'
import localStorageService from '../service/localStorageService'
import { withRouter, Link } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};

function LoginForAdmin(props) {

    const onFinish = (values) => {
        const body = {
            username: values.username,
            password: values.password
        }
        axios.post('/user/login/admin', body)
            .then(result => {
                localStorageService.setToken(result.data.accessToken)
                console.log(result.data)
                props.setRole('admin')
            })
            .catch(err => {
                notification.error({
                    message: "Login false.."
                })
            })
    }

    return (
        <Row justify="center" align="middle" style={{ height: "100%" }}>
            <Col xs={12} sm={23} lg={12} >
                <Row justify="center" style={{ margin: "100px" }}>
                    <img src="https://i.ibb.co/dPQT5GK/pngegg.png" alt="pngegg" border="0"
                        style={{ width: "100%", maxWidth: "250px" }} />

                </Row>
            </Col>

            <Col xs={12} sm={23} lg={10} justify="center" align="middle" style={{ height: "100%" }} >
                <div className="Form">
                    <Row justify="center">
                        <Form
                       
                       className="App"
                       {...layout}
                       onFinish={onFinish}
                       style={{ width: "100%", 
                       justifyContent: "center",
                            border : "1px solid black",
                            borderColor : "#e1e1e1",
                            height: "300px"
                        }}
                        className="loginUsername"
                        
                        >
                        <h1 style={{marginTop : "20px"}}>Sign-In Admin</h1>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="Username"
                                    style={{ marginLeft: "50px",
                                     marginTop : "50px"}}
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Password"
                                    style={{ marginLeft: "50px" }} />
                            </Form.Item>

                            <Row style={{ marginLeft: '80px' }} >
                                <Button className="login-form-button"  htmlType="submit" style={{ width: '300px' ,backgroundColor:"blue",color: "white"}}>
                                    Continue
                                </Button>
                            </Row>
                        </Form>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default LoginForAdmin
