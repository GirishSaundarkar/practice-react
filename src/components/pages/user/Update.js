/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'

function Update() {
    let navigate = useNavigate();
    let { id } = useParams();
    let { register, handleSubmit, setValue } = useForm();

    async function getStudent() {
        const response = await axios.get(`http://localhost:5000/students/${id}`)
        const data = response.data;
        setValue('name', data.name);
        setValue('roll', data.roll);
        setValue('marks', data.marks);
    }
    async function saveData(data) {
        await axios.patch(`http://localhost:5000/students/${id}`, data);
        alert('Updated data')
        navigate('/retrieve')
    }

    useEffect(() => {
        getStudent();
    }, [id]);

    return (
        <div className='container'>
            <h1 className='text-center'><u>Update Student</u></h1>
            <form onSubmit={handleSubmit(saveData)} className='me-5 mx-auto'>

                <label htmlFor='name'>Name</label>
                <input type='text' id='name' className='form-control' {...register('name')} />
                <br /><br />

                <label htmlFor='roll'>Roll</label>
                <input type='text' id='roll' className='form-control' {...register('roll')} />
                <br /> <br />

                <label htmlFor='marks'>Marks</label>
                <input type='text' id='marks' className='form-control' {...register('marks')} />
                <br /><br />

                <input type='submit' className='btn btn-outline-success' value='SUBMIT' />
                <input type='reset' className='btn btn-outline-warning' value='RESET' />
            </form>
        </div>
    )
}

export default Update