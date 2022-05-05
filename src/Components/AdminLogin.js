import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {

const navigate= useNavigate();
    const [admin ,setAdmin]=useState({
        adminusername:"",
        adminpassword:"",
    });
   
    function onChange(e) {
        setAdmin({ ...admin, [e.target.name]: e.target.value })
        
    }

    function displayuserdata(e){
        e.preventDefault();
       if(admin.adminusername=="siva" && admin.adminpassword=="siva@123"){
          localStorage.setItem("key", "1"); 
          navigate('../admin')
       }
      
    }



  return (
    <div>
        
        <div className='form_bg'>
            <div className='container adminform'>
                <div className='row'>
                    <div className='col-md-offset col-md-6 col-sm-offset-3 col-sm-6'>
                        <form className='form_horizontal'>
                            <div className='form_icon'><i className='fa fa-user-circle'></i></div>
                             <h3 className='title'>Admin Login</h3>
                             <div className='form-group'>
                                 <span className='input-icon'><i className='fa fa-user'></i></span>
                                 <input type="text" onChange={onChange} defaultValue={admin.adminusername}  name="adminusername" placeholder="username" className='form-control' />

                             </div>
                             <div className='form-group'>
                                 <span className='input-icon'><i className='fa fa-lock'></i></span>
                                 <input type="password"  onChange={onChange} name="adminpassword" placeholder="password" className='form-control'  value={admin.adminpassword}/>

                             </div>
                             <button className='btn signin' onClick={displayuserdata}>login</button>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default AdminLogin