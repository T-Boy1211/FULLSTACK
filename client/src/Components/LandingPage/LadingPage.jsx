import React from 'react'
import { useNavigate } from 'react-router'
import Bugatti from "../../assets/bugatti.jpg";

const LadingPage = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        justifyContent: "center",
        backgroundImage: `url(${Bugatti})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw"
      }}
    >
      <h1>WELCOME</h1>
      <p>To my website. To get started click on a buton below</p>
      <br /><br />
      <button 
        onClick={() => navigate('/signup')}>
          Signup
      </button>
      <button 
        onClick={() => navigate('/login')}>
          Login
      </button>
    </div>
  )
}

export default LadingPage
