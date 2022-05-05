import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate=useNavigate

  const logout=()=>{
    localStorage.clear();
      navigate("/login")
  }
  return (
    <div>
      <button className='btn btn-success' onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout