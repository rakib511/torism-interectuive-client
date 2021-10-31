import React from 'react';
import { useForm } from "react-hook-form";

import './AddService.css'

const AddData = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      console.log(data)
        fetch('https://murmuring-escarpment-57356.herokuapp.com/addService',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(result => console.log(result))
          
    };
    return (
        <div>
            <h2>Add your outstanding service </h2> <hr />
            <form className='addservice' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img", { required: true })}placeholder='img' /> <br />
                <input {...register("name", { required: true })}placeholder='name' /> <br />
                
                <input {...register("duration")}placeholder='deration' /> <br />
                <input type="number" {...register("price")}placeholder='price' /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddData;