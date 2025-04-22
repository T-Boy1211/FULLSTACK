import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Big from "../../assets/big.jpg"
import { ToastContainer, toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
      if (response.ok) {
        (data.message);
      } else {
        (data.message);
      }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(data => 
      data.email === email &&
      data.password === password
    );

    
    if (userExists) {
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/Home");
      }, 3000);
    }else {
      toast.error("Login failed. Please check your credentials or sign up.", {
        position: "top-right ",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
      });
    }
  }
  return (
    <div 
      style={{ 
        margin: "auto",
        textAlign: "center",
        justifyContent: "center",
        backgroundImage: `url(${Big})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>LogIn</h1>
      <br /><br /><br />
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name='email' 
          placeholder='Email' 
          onChange={(e)=>setEmail(e.target.value)}
          value={email} 
          required
        />
        <br /><br />
        <input 
          type="password" 
          name='password' 
          placeholder='Password' 
          onChange={(e)=>setPassword(e.target.value)}
          value={password} 
          required
        />
        <button 
          type="submit">
            Log In
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default LogIn
