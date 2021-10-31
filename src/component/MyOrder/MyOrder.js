import React,{useEffect, useState} from 'react';
import useAuth from '../hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    const email = user?.email;
    // console.log(email);
    const [orders ,setorders] = useState([]);
    const [Isdeleteorders ,setIsdeleteorders] = useState(null);

    useEffect( ()=>{
        fetch(`http://localhost:5000/myOrder/${email}`)
        .then(res=> res.json())
        .then(data => setorders(data))
    },[Isdeleteorders])

    const handleOrderDelete = id =>{
        fetch(`http://localhost:5000/deleteOrder/${id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"},
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount){
                setIsdeleteorders(true)
                alert("are you sure dlete?")
            }
            else{
                setIsdeleteorders(false)
            }
        })

        console.log(id);
    }


    return (
        <div>
            <h1> Order Purchase</h1>
            <div>
                <div className="row container text-center mx-auto">
                    {
                        orders.map((order,index) => (
                            <div className="col-md-4 col-sm-12">
                                <div className="border border p-2 m-2">
                                <img className='img-fluid' src={order.img} alt="" />
                                    <h3>{order.name}</h3>
                                    <p>Duration:{order.duration}</p>
                                    <h6>Cost:${order.price}/man</h6>
                                    <button onClick={()=>handleOrderDelete(order._id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;