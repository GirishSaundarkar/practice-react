import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Add() {
    let navigate = useNavigate();
    let { register, handleSubmit } = useForm();

    function saveData(data) {
        axios.post('http://localhost:5000/students', data)
        alert('saved data successfully!')
        navigate('/retrieve')
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(saveData)} className='me-5'>
                <label htmlFor="name">Name</label>
                <input type='text' id='name' className='form-control' placeholder='eg. girish' {...register("name")} />
                <br /><br />

                <label htmlFor="roll" >Roll</label>
                <input type='number' id='roll' className='form-control' placeholder='eg. 456' {...register("roll")} />
                <br /><br />

                <label htmlFor="marks" >marks</label>
                <input type='number' id='marks' className='form-control' placeholder='eg. 96' {...register("marks")} />
                <br /><br />

                <input type='submit' value="SUBMIT" className='btn btn-outline-success btn-lg col-6' />
                <input type='reset' value="RESET" className='btn btn-outline-danger btn-lg col-6' />
            </form>
        </div>
    )
}

export default Add