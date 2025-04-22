import React from 'react'
import Super from '../../assets/super.jpg'

const Home = () => {
  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        justifyContent: "center",
        backgroundImage: `url(${Super})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "150vh",
        width: "100vw"
      }}
    >
      <h1>WELCOME AGAIN</h1>
      <h2>TO SUPER-SPORT WEB</h2>
      <p>where you will discover all sort of sport cars</p>
    </div>
  )
}

export default Home
