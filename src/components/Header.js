import React, { useState, useEffect, useContext } from 'react'
import './Header.css'
import { withRouter, Link } from 'react-router-dom'
import Search from 'antd/lib/input/Search'
import { Row, Col, Button } from 'antd'
import { ShoppingCartOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import jwtDecode from 'jwt-decode'
import localStorageService from '../service/localStorageService'
import { SearchContext } from '../contexts/SearchContext'
import Avatar from 'antd/lib/avatar/avatar'



function Header(props) {
    const [name, setName] = useState('')


    const { searchTerm: [searchTerm, setSearchTerm] } = useContext(SearchContext);

    const logout = () => {
        localStorageService.removeToken()
        props.setRole('guest')

    }




    useEffect(() => {
        const token = localStorageService.getToken()
        if (token) {
            const user = jwtDecode(token)
            setName(user.name)
        }
    }, [])

    return (
        <Row gutter={24} className="header" >
            <Col span={2} >
                <Link to='/' >
                    <Row style={{ justifyContent: "center", textAlign: "center" }}>
                        <img className="header_logo"
                            src="https://i.ibb.co/dPQT5GK/pngegg.png" alt="pngegg" border="0" style={{ width: "50%" }} />

                    </Row>
                </Link>
            </Col>
            <Col span={16}>
                <Search className="searchBox"
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => setSearchTerm(value)}
                />
            </Col>
            {/* <Link to='/history'> */}
                {/* <Col span={1} style={{ marginTop: "5px" }}>
                </Col> */}
            {/* </Link> */}
            <Col span={2}>
                <Link to='/history' >
                    <Row >
                        <Col style={{
                            justifyContent: "center",
                            width: "100px",
                            textAlign: "center",
                            marginTop: "3px"
                        }}>
                        <Avatar size="small" icon={<UserOutlined />} />
                            <div>{name}</div>
                        </Col>
                    </Row>

                </Link>
            </Col>
            <Col span={2} >
                <Link to="/cart" >
                    <ShoppingCartOutlined className="cartIcon" style={{ fontSize: '30px' ,color: "white",marginLeft:"15px"}} />
                </Link>
            </Col>
            <Col span={2}>
                <Link to="/login" onClick={logout}>
                    <LogoutOutlined className="logoutButton" style={{ color: "red", fontSize: '25px' }} />
                </Link>
            </Col>
        </Row >
    )

}

export default withRouter(Header)