import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Login from './Login'

const Registration = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({

        name: "",
        email: "",
        password: "",
        mobile: "",
        age: ""
    })
    const postdata = async (e) => {
        e.preventDefault()
        await axios.post("https://react-project-2e7b8-default-rtdb.firebaseio.com/postdata.json", {
            name: data.name,
            email: data.email,
            password: data.password,
            mobile: data.mobile,
            age: data.age
        }).then(res => { console.log(res.data) })
        navigate('/')
    }

    const submit = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }

    return (
        <div className='container'>

            <div className='card'>
                <form>

                    <div className='card-header'>
                        <h2>Create account</h2>
                    </div>
                    <div>
                        <label>Name:</label>
                        <input onChange={submit} name="name" value={data.name} type="text" className='form-control' placeholder="please entername" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input onChange={submit} name="email" value={data.email} type="email" className='form-control' placeholder="please enteremail" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input onChange={submit} name="password" value={data.password} type="password" className='form-control' placeholder="please enterpassword" />
                    </div>
                    <div>
                        <label>MobileNo:</label>
                        <input onChange={submit} name="mobile" value={data.mobile} type="tel" className='form-control' placeholder="please enter mobileno" />
                    </div>
                    <div>
                        <label>Age</label>
                        <input onChange={submit} name="age" type="tel" className='form-control' value={data.age} placeholder="please enterage" />
                    </div>
                    <div className='buttonstyle'>
                        <button onClick={postdata} className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
            {/* <Login email1={data.email} password1={data.password}/> */}
        </div>
    )
}

export default Registration