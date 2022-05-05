import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './Login.css';

const Login = (props) => {
    //    const {email1,password1}=props
    //    console.log(email1)
    let navigate = useNavigate();
    const [details, setDetails] = useState([''])
    const [verifyuser, setVerifyuser] = useState({
        email2: "",
        password2: ""
    })
    const GetData = () => {
        axios.get("https://react-project-2e7b8-default-rtdb.firebaseio.com/postdata.json", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        }).then((res) => {

            // console.log(Object.values(res));
            const data1 = Object.values(res.data);

            // setDetails(data1)
            console.log(verifyuser.email2, verifyuser.password2)

            const display = data1.find((a) => {
                localStorage.setItem("username", a.name);
                return a.email === verifyuser.email2 && a.password === verifyuser.password2;


            })
            if (display?.email) {
                navigate('home')
            }

            console.log(display)
            // if(data1){
            //     navigate('home')
            // }

        })
    }

    function onChange(e) {
        setVerifyuser({ ...verifyuser, [e.target.name]: e.target.value })
        console.log(verifyuser)
    }
    // useEffect(() => {
    //     GetData()
    // }, [])
    // const MoovePostData=()=>{
    //    navigate('/postdata')
    // }
    const registerhere = () => {
        navigate('registration')
    }
    // const homedata=()=>{
    //         if(email1===email && password1===password){
    //            navigate('home') 
    //         } 
    // }

    return (
        <div className="entirebackground" >
            <div className='form my-4 mx-5'>
            <div className='baground'>
                <marquee>
                    <h1>Please Login Here</h1>
                </marquee>
                <div className='container details'>
                    <div className='row no-gutters'>
                        <div className='col-lg-5'>
                            <img src='../assets/login image.jpeg' className='img-fluid' alt="" />
                        </div>
                        <div className='col-lg-7 px-5 pt-2 '>
                            {/* <h1 className='heading'>Login Here</h1> */}

                            <div className='form-row'>
                                <div className='col-lg-7' >
                                    <label>Email:</label>
                                    <input name="email2" value={details.email2} onChange={onChange} type="email" className='form-control my-1 p-2' placeholder="please enteremail" />
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <label>Password:</label>
                                    <input name="password2" value={details.password2} onChange={onChange} type="password" className='form-control my-1 p-2' placeholder="please enterpassword" />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <button className='btn1 mt-3 mb-5' onClick={GetData}>Login</button>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <div className='registerhere' >
                                        <p >Don't have a account please<h5 onClick={registerhere}>RegisterHere?</h5></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
            </div>
        </div>

    )
}

export default Login