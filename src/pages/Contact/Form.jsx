import React from 'react';
import { useState} from 'react'
import './form.css'

const Form = () => {
    const[data, setData] = useState({name:"", email:"", phone:"", message:""});
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(data)
    }
    return (
        <form method='post' onSubmit={handleSubmit}>
            <h1>Contact <span>Us</span></h1>
            <p> Please fill out this form if you have any queries, or contact us on our social media! </p>
            <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder='Enter Name'/>
            <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder='example@gmail.com'/>
            <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder='+44'/>
            <textarea name ="message" id="" cols="30" onChange={handleChange} value={data.message} placeholder='Type here...'/>
            <button type='submit'>send</button>
            {/*<p>{data.name}, {data.email}, {data.phone}, {data.message}</p>*/}
        </form>

    )
}

export default Form