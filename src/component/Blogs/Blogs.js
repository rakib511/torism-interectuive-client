import React, { useEffect, useState } from 'react';
import './Blog.css';

const Blogs = () => {
    const [blogs,setBlogs] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(result => setBlogs(result))
    },[])
    return (
        <div>
            <h1 className="mt-5">Our Activiteis</h1> <hr />
            <div className="all-blogs">
                <div className="row mt-5 py-3 mx-auto">
                    {
                        blogs.map(pd=>(
                            <div className="col-md-3 col-sm-12">
                                <div className="blog">
                                    <h2>{pd.name}</h2>
                                    <p>{pd.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;