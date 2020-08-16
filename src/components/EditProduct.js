import React, { useState } from 'react';
import { Button, Row, Col, Input } from 'antd';
import axios from 'axios';

export default function EditProduct(props) {
    const [changeInput, setChangeInput] = useState("");
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [isEdit, setIsEdit] = useState(false);

    const updateTodoItem = async (id) => {
        await axios.put(`/product/${id}`, {
            name,
            category,
            price,
            image
        });
        props.fetchProduct();
        setIsEdit(false);
    };

    const toggleEdit = () => {
        setName(props.item.name);
        setCategory(props.item.category);
        setPrice(props.item.price);
        setImage(props.item.image);
        setIsEdit(true);
    };

    let contents = (
        <Row style={{ width: '100%' }}>
            <form>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-lg-6 col-form-label">Name</label>
                    <div class="col-lg-10">
                        <Input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-lg-6 col-form-label">Category</label>
                    <div class="col-lg-10">
                        <Input value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-lg-6 col-form-label">Price</label>
                    <div class="col-lg-10">
                        <Input value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-lg-6 col-form-label">Image</label>
                    <div class="col-lg-10">
                        <Input value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
                <Col span={4}>
                    <Button type="primary" onClick={() => updateTodoItem(props.item.id)}>Done</Button>
                </Col>
            </form>

        </Row>
    );

    if (!isEdit) {
        contents = (
            <Row style={{ width: '100%' }}>
                <Col span={16}>
                    <Row justify="start">
                        <table class="table" >
                            <thead>
                                <tr >
                                    <th scope="col" >No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image url</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{props.item.id}</th>
                                    <th>{props.item.name}</th>
                                    <td>{props.item.category}</td>
                                    <td>{props.item.price}</td>
                                    <td>{props.item.image}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Col span={6}>
                            <Button style={{ backgroundColor: 'orange' }} onClick={() => toggleEdit()}>Edit</Button>
                        </Col>
                        <Col span={6}>
                            <Button type="danger" onClick={() => props.delete(props.item.id)}>Delete</Button>
                        </Col>
                    </Row>
                    <br />
                </Col>
            </Row>
        );
    }

    return (
        <div style={{ width: '100%' }}>
            {contents}
        </div>
    );
}
