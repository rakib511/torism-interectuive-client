import React, { useEffect, useState } from 'react';
import './ToristGuird.css'

const TouristGiurd = () => {
    const [giurds,setGiurds] = useState([])
    const [isDelete,setIsdelete] = useState(null);

    useEffect( ()=>{
        fetch('https://murmuring-escarpment-57356.herokuapp.com/giurds')
        .then(res => res.json())
        .then(data=> setGiurds(data))
    },[isDelete]);

    const handleDelete = id =>{
        fetch(`https://murmuring-escarpment-57356.herokuapp.com/deleteGiurd/${id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"},
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount){
                alert('delete confirm?')
                setIsdelete(true)
            }
            else{
                setIsdelete(false)
            }
        })
        console.log(id);

    }
    return (
        <div>
            <h1 className='mt-5'>OUR TEAM</h1> <hr />
            <div className="all-service">
                <div className="row container text-center mx-auto">
                    {
                        giurds.map( (pd)=>(
                            <div className="col-md-4">

                                <div className="card guird" style={{"width": "18rem"}}>
                                <img src={pd.img} className="card-img-top img-fluid" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title"> {pd.name}</h5>
                                    <p className="card-text">{pd.description} </p>
                                    <div className="d-flex ">
                                        <a href="*"><div className="single-item"><i class="fab fa-facebook"></i></div></a>
                                        <a href="*"><div className="single-item"><i class="fab fa-twitter"></i></div></a>
                                        <a href="*"><div className="single-item"><i class="fab fa-linkedin"></i></div> </a>            
                                    </div>
                                    <button  onClick={()=> handleDelete(pd._id)} className='btn btn-danger mt-5'>Delete</button>
                                </div>
                                </div>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TouristGiurd;