import React from 'react'
import "../css/header.css"
import * as FaIcons from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom'
// import Addproduct from '../pages/Addproduct'
function Header() {
  const navigate = useNavigate()

  
  return (
    <>
        <header className='product-header'>
            <div  className="input-search">
                <input type={'search'} placeholder={'Search item'}/>
            </div>
            <FaIcons.FaPlusCircle  className='add-btn' onClick={()=>
              navigate("/add")}/>
            {/* <Link to={'product/add'}>add</Link> */}
            {/* <Outlet/> */}
        </header>
    </>
  )
}

export default Header