import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router';
import { useForm } from "react-hook-form";


const UpdateService = () => {
    const {serviceId} = useParams();
    const [singleService,setSingleService] = useState({});
    // update service
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
      console.log(data);
      fetch(`https://murmuring-escarpment-57356.herokuapp.com/updateSingleService/${serviceId}`,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result=> {
          if(result.modifiedCount > 0 ){
              alert('Update successfully')
              reset();
          }
      })
    };

    useEffect( ()=>{
        fetch( `https://murmuring-escarpment-57356.herokuapp.com/singleService/${serviceId}`)
        .then(res => res.json())
        .then(data => setSingleService(data))
    },[])


    
    return (
        <div className='addservice py-5 '>
            <h4>Update your estimate time and budget:</h4> <hr />
            <form className='addservice' onSubmit={handleSubmit(onSubmit)}>
                {/* <input defaultValue={singleService.img} {...register("img", { required: true })}placeholder='img' /> <br /> */}
                {/* <input defaultValue={singleService.name} {...register("name", { required: true })}placeholder='name' /> <br /> */}
                
                <input defaultValue={singleService.duration}{...register("duration")}placeholder='deration' /> <br />
                <input defaultValue={singleService.price} type="number" {...register("price")}placeholder='price' /> <br />
                <input className='bg-warning py-2' type="submit" value='update' />
            </form>
        </div>
    );
};

export default UpdateService;