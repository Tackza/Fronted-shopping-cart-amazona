import React from 'react'
import { Row, Col, Divider, Input, Button, Form, notification } from 'antd'
import Title from 'antd/lib/skeleton/Title'
import axios from '../config/axios'
import localStorageService from '../service/localStorageService'
import { withRouter } from 'react-router-dom'

const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};

function Login(props) {

    const onFinish = values => {
        const body = {
            username: values.username,
            password: values.password
        }
        axios.post('/user/login', body)
            .then(result => {
                localStorageService.setToken(result.data.accessToken)
                console.log(result.data)
                props.setRole('user')
                props.history.push("/")
            })
            .catch(err => {
                notification.error({
                    message: "Login false.."
                })
            })
    }

    return (
        <Row justify="center">
            <Col xl={12}>
                <Row justify="center">
                    <Title level={10} className="Title">
                        Logo
                    </Title>
                    <Divider className="Divider" />
                </Row>
            </Col>

            <Col xs={23} sm={23} md={23} lg={14} xl={12} xxl={12}>
                <div className="Form">
                    <Row justify="center">
                        <Title level={2} className="Title">
                            login
                    </Title>
                        <Divider className="Divider" />
                    </Row>
                    <Form
                        className="App"
                        {...layout}
                        onFinish={onFinish}
                        style={{ width: "70%" }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Button className="Button" type="primary" htmlType="submit">
                            Submit
                        </Button>

                    </Form>
                </div>
            </Col>
        </Row>
    )
}

export default withRouter(Login)
