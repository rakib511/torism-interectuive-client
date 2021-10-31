import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../hooks/useAuth';



const Service = () => {
    const {user} = useAuth();
    

    const[services,setServices] = useState([]);
    // const [isDelete,setIsDelete] = useState(null);
    useEffect(()=>{
        fetch('https://murmuring-escarpment-57356.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    // const handleDelete = id =>{
    //     fetch(`https://murmuring-escarpment-57356.herokuapp.com/deleteService/${id}`,{
    //         method:"DELETE",
    //         headers:{"content-type":"applicaton/json"}
    //     })
    //     .then(res => res.json())
    //     .then(result =>{
    //         if(result.deletedCount){
    //             alert('delete confirm?')
    //             setIsDelete(true)
    //         }
    //         else{
    //             setIsDelete(false)
    //         }
    //     })
    //     console.log(id);
    // };
    const handleAddtoCart = index =>{
        const data = services[index];
        data.email = user.email;
        data.status = "pending";
        // const email = user?.email;
        // console.log(data);
        

        fetch('https://murmuring-escarpment-57356.herokuapp.com/addOrder',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
    }

    return (
        <div>
            <h1>Our Special service</h1>
            <div className="all-service">
                <div className="row container text-center mx-auto">
                    {
                        services.map( (pd,index)=>(
                            <div className="col-md-4" pd={pd}>
                                <div className="service border p-2 m-2">
                                    <img className='img-fluid' src={pd.img} alt="" />
                                    <h3>{pd.name}</h3>
                                    <p>Duration:{pd.duration}</p>
                                    <h6>Cost:${pd.price}/man</h6>

                                <button onClick={()=>handleAddtoCart(index)} className='btn btn-success me-2'>Purchase now</button>

                                    <Link to={`/updateService/${pd._id}`}><button className='btn btn-warning me-2'>Update</button></Link>
                                   

                                    {/* <button onClick={()=> handleDelete(pd._id)} className='btn btn-danger'>Delete</button> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Service;