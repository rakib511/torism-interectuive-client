import React from 'react';
import { useForm } from "react-hook-form";
import './Addgiurd.css'


const AddGuird = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://murmuring-escarpment-57356.herokuapp.com/addGiurd',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>console.log(result))
    
    };
    return (
        <div>
            <h2>Add A Tourist Giurd</h2>
            <form className='addservice' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img", { required: true })}placeholder='img' /> <br />
                <input {...register("name", { required: true })}placeholder='name' /> <br />
                <input {...register("description")} placeholder='description' /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddGuird;