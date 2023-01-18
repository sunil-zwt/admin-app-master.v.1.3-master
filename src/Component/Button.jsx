import React from 'react'
import * as BsIcons from "react-icons/bs";
import { Link, Outlet, useNavigate } from 'react-router-dom'
import "../css/product.css"
// import { useLocation } from 'react-router-dom'
function Button(props) {
  const navigate = useNavigate()
  // const loc = useLocation()
  // const handleEdit = (e) =>{
  //     const {value} = e.target
  //     console.log(value)
  //     const items = JSON.parse(localStorage.getItem('dataKey'))
  //     console.log(items);

  // }
  // let localData = JSON.parse(localStorage.getItem('dataKey'))
  let key = props.product
  const handleDelete = (e) => {
    e.preventDefault()
    let localData = JSON.parse(localStorage.getItem('dataKey'))
    const _product = localData.filter((data) => {
      return data.id !== key.id
    })
    console.log(_product);
    localStorage.setItem('dataKey', JSON.stringify(_product))
  }
  return (
    <div className='action-container'>
      <BsIcons.BsPencilSquare className='edit-btn' onClick={() =>
        navigate("/edit", { state: props.product })
      } />

      <BsIcons.BsTrashFill className='delete-btn' onClick={handleDelete} ></BsIcons.BsTrashFill>
    </div>
  )
}

export default Button