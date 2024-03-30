import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { logout } from '../APIposts'
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async()=>{
    const {data} = await logout();
    if(data.status===true){
      navigate("/login");
    }
    else{
      console.log(data.msg);
    }
  }
  return (
    <>
    <Header/>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home