import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";
import Sidebar from "./Component/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import {Electronic,Jewelery,MensClothing,WomensClothing} from "./pages/Category";
import Addproduct from "./pages/Addproduct";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
// import Pagination from "./Component/Pagination";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <div className="App">
      <BrowserRouter>

      {
        token ? (<Sidebar>
          <Routes>
            
            {/* <Route path="/home" element={<Dashboard />} /> */}
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/product" element={<Product />}>
              </Route>
              <Route path="/add" element={<Addproduct/>}/>
              <Route path="/edit" element={<Edit/>}/>
              {/* <Route path="/category" element={<Category/>} /> */}
              <Route path="/category/electronics" element={<Electronic/>} />
              <Route path="/category/jewelery" element={<Jewelery/>} />
              <Route path="/category/mensClothing" element={<MensClothing/>} />
              <Route path="/category/womensClothing" element={<WomensClothing/>} />

             
            </Routes>
         
          </Sidebar>) : ( <Routes>
        <Route path="/login" element={<Login token={token} setToken={setToken}/>}/>
      </Routes>)
      } 
     
        
      
      
        {/* <Routes>
       
        </Routes> */}
        {/* <Routes>
        <Route path="/product/add" element={<Addproduct />}/>
        </Routes> */}
      </BrowserRouter>
      {/* <Pagination/> */}
    </div>
  );
}

export default App;
