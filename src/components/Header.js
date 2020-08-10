import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Search from 'antd/lib/input/Search'
import { Row, Col } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

function Header() {
    return (
        <Row gutter={24} className="header" >
            <Col span={4}>
                <Link to='/'>
                    <img className="header_logo"
                        src="https://innovation-amazon.com/src/img/amazonbialynapis-01.svg" />
                </Link>
            </Col>
            <Col span={14}>
                <Search className="searchBox"
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />
            </Col>
            <Col span={2}>
                <Link to='/login'>
                    <div>sign In</div>
                </Link>
            </Col>
            <Col span={2}>
                <Link to='/history'>
                    <div>Hello tack</div>
                </Link>
            </Col>
            <Col span={2}>
                <Link to="/register">
                    <div>register</div>
                </Link>
            </Col>
            <Col span={2}>
                <Link to="/cart">
                    <ShoppingCartOutlined />
                </Link>
            </Col>
        </Row >
    )

}

export default Header