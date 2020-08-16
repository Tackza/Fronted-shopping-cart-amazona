import React, { useState, useEffect } from 'react'
import axios from '../config/axios'
import { Button } from 'antd'

let options = {  year: 'numeric', month: 'long', day: 'numeric' }
function Member() {
    const [person ,setPerson] = useState([])

    const fetchPerson = async() => {
        const httpResponse = await axios.get('/user')
        setPerson(httpResponse.data)
    }
    useEffect(() => {
        fetchPerson()
    }, [])

    const deletePerson = async(id) => {
        await axios.delete(`/user/${id}`)
        fetchPerson()
    }

    console.log(person)
    return (
        <div>
            <table class="table table-md">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Username</th>
                        <th scope="col">Name</th>
                        <th scope="col">CreateDate</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map(list =>
                        <tr>
                            <th scope="row">{list.id}</th>
                            <td>{list.username}</td>
                            <td>{list.name}</td>
                            <td>{new Date(list.createdAt).toLocaleDateString('de-DE',options)}</td>
                            <td></td>
                            <Button onClick={()=>deletePerson(list.id)} danger>Block</Button>
                        </tr>
                    )}
                </tbody>
                <caption></caption>

            </table>
           
        </div>
    )
}

export default Member
