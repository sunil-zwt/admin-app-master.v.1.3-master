import React, { useState } from "react";
import "../css/login.css";
import image from "../images/login.jpg"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import Sipnner from "../Component/Sipnner";
import Dashboard from "./Dashboard";

function Login({token,setToken}) {
  // const userRef = useRef()
  // const errRef = useRef();
  const navigate = useNavigate()
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [loading,setLoading]= useState(true)

  const [errMsg, setErrMsg] = useState("");

  //   useEffect(()=>{
  //     userRef?.current.focus()
  //   })

  //   useEffect(() => {
  //     setErrMsg('');
  // }, [input])

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });

    console.log("name", name, "value", value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // setLoading(false)
    let response = axios("https://fakestoreapi.com/auth/login", {
      method: "POST",
      data: {
        username: input.username,
        password: input.password,
      },
    });
    response
      .then((res) => {
        const accessToken = res?.data?.token;
        setToken(accessToken);
        localStorage.setItem("userToken", accessToken);
        setLoading(false)
      navigate("/")
      })
      .catch((err) => {
        if (!err?.response) {
          setErrMsg("No Server Response");
          setLoading(true)
        } else if (err.response.data?.status === 400) {
          setErrMsg("Missing Username or Password");
          setLoading(true)
        } else if (err.response.data?.status === 401) {
          setErrMsg("Unauthorized");
          setLoading(true)
        } else {
          setErrMsg("Login Failed");
          setLoading(true)
        }
      });
    setInput({
      username: "",
      password: "",
    });
    setErrMsg("");



  };
  return (
    <div className="container">
      <form className="form">
        <div className="login-container">
          <img src={image} alt="logo" className="logo-image" />

          <div className="input-text">
            <label htmlFor="username">User Name</label>
            <input
              type={"text"}
              name={"username"}
              placeholder={"Enter User Name"}
              value={input.username}
              onChange={handleInput}
            />
          </div>
          <div className="input-text">
            <label htmlFor="password">Password</label>
            <input
              type={"password"}
              name={"password"}
              placeholder={"Enter Password"}
              value={input.password}
              onChange={handleInput}
            />
          </div>
        </div>
        {errMsg && <small>{errMsg}</small>}
        <button onClick={handleLogin} className="login-btn">Login</button>
        
      </form>
   
    </div>
  );
}

export default Login;
