import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './Login'
import Registration from './Registration'
import Home from './Home';
// import Logout from './Logout';
import Orders from './Orders';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import PrivateRoute from './Privateroute';
import Payment from './Payment';
// import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    //   const  navigate=useNavigate();
    const logoutdata = () => {
        localStorage.clear();
        window.location.href = "/";

    }
    return (
        <div>
            <Router>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link className="nav-link" to={'home'} >Home </Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link className="nav-link" to={'logout'} >Logout</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link className="nav-link" to={'/'} >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'orders'}>Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'admin'}>Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'adminlogin'}>AdminLogin</Link>
                            </li>

                        </ul>
                        <ul className="logoutdata" >
                            <li className='nav-item' >
                                <button className='btn btn-secondary nav-link' onClick={logoutdata}>Logout</button>
                            </li>

                        </ul>

                        <div>


                        </div>
                    </div>

                </nav>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    {/* <Route path='signin' element={<Login/>}></Route> */}
                    <Route path='registration' element={<Registration />}></Route>
                    <Route path="home" element={<Home />}></Route>
                    {/* <Route path="logout" element={<Logout />}></Route> */}
                    <Route path='orders' element={<Orders />}></Route>

                    <Route element={<PrivateRoute/>}>
                    <Route path='admin' element={<Admin />}></Route>
                    </Route>



                    <Route path='adminlogin' element={<AdminLogin />}></Route>
                    <Route path='payment' element={<Payment/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Navbar