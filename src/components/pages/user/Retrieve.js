import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Retrieve() {
    let [student, setStudent] = useState([]);

    async function getStudent(data) {
        const result = await axios.get("http://localhost:5000/students", data)
        setStudent(result.data)
        alert('retrieved student')
    }

    function deleteStudent(id) {
        axios.delete(`http://localhost:5000/students/${id}`)
        alert('deleted student')
    }
    useEffect(() => {
        getStudent()
    }, [])
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Marks</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map((obj) => {
                        return (
                            <tr key={obj._id}>
                                <td>{obj.name}</td>
                                <td>{obj.roll}</td>
                                <td>{obj.marks}</td>
                                <td>
                                    <NavLink to={`/update/${obj._id}`}><button className='btn btn-outline-warning btn-sm me-3'>Update</button></NavLink>
                                    <button onClick={() => { deleteStudent(obj._id) }} className='btn btn-outline-danger btn-sm me-3'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Retrieve