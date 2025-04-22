import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sportImage from "../../assets/sport.jpg";
import { ToastContainer, toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName, email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    (data.message);
  } else {
    (data.message);
  }


    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(
      (data) => data.userName === userName || data.email === email
    );

    if (userExists) {
      toast.warning("User already exists. Please LogIn.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
      });
      setTimeout(() => {  
        navigate("/LogIn");
      }, 3000);
    } else {
      const newUser = { userName, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      toast.success("Signup successful!", {
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

    }
  };

  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        justifyContent: "center",
        backgroundImage: `url(${sportImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "120vh",
        width: "100vw",
      }}
    >
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">SignUp</button>
      </form>
      <ToastContainer />
      <p>
        Already have an account? <a href="/LogIn">LogIn</a>
      </p>
    </div>
  );
};

export default SignUp;
