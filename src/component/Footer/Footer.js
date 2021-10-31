import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark text-white py-3 mt-5'>
            <div className="row py-5">
                <div className="col-md-3 col-sm-12">
                    <h3><span className="text-danger">Tour-X AGANCY</span></h3>
                    <div className="font-style">
                        <a href="*"><div className="single-item"><i class="fab fa-facebook"></i></div></a>
                        <a href="*"><div className="single-item"><i class="fab fa-twitter"></i></div></a>
                        <a href="*"><div className="single-item"><i class="fab fa-linkedin"></i></div> </a>            
                    </div>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                
                <div className="col-md-3 col-sm-12">
                    <ul>
                        <li>About Travel Agancy</li>
                        <li>Read our blog</li>
                        <li>Sign up to for advancer</li>
                        <li>Add your blog</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12">
                    <ul>
                        <li>Get help</li>
                        <li>Read FAQs</li>
                        <li>View all citios</li>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;