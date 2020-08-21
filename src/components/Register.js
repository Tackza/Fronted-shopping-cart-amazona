import React from 'react'
import { Row, Col, Divider, Form, Input, Button, notification } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import axios from '../config/axios';
import { withRouter } from 'react-router-dom';


const layout = {
    labelCol: { xs: 24, sm: 7, md: 6, lg: 6, xl: 5, xxl: 4 },
    wrapperCol: { xs: 24, sm: 17, md: 18, lg: 18, xl: 19, xxl: 20 },
};

function Register(props) {

    const onFinish = values => {
        console.log('Received values of form: ', values);
        const body = {
            username: values.email,
            password: values.password,
            name: values.nickname
        }
        axios.post('user/register', body)
            .then(res => {
                notification.success({
                    message: "Register Success"
                })
                props.history.push("/login")
            })
            .catch(err => {
                notification.error({
                    message: "Register false"
                })
            });
    }

    return (
        <Row justify="center" align="middle" style={{ height: "100%" }}>
            <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}  >
                <div
                    className="Form"
                >
                    <Form justify="center" align="middle" style={{ height: "100%" }}
                        {...layout}
                        onFinish={onFinish}
                        style={{ width: "100%" ,
                        justifyContent: "center"}}
                        
                    >
                        <h1 style={{marginTop : "20px"}}>Register</h1>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            hasFeedback
                            dependencies={['password']}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve()
                                        }
                                        return Promise.reject("Confirm password again please")
                                    }
                                })
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="nickname"
                            label={<span>Nickname&nbsp;</span>}
                            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>

                        <Row style={{ justifyContent: 'center' }}>
                            <Button className="Button" type="primary" htmlType="submit" style={{width : "100px"}}>
                                Register
                        </Button>

                        </Row>
                    </Form>
                </div>
            </Col>
        </Row>
    );

}

export default withRouter(Register)
