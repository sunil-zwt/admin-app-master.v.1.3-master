
// export default Addproduct
import React, { useState, useEffect } from 'react';
import "../css/add.css";
import { useNavigate } from "react-router-dom"
// import{useNavigate} from"react-router-dom";
function Addproduct() {
    const navigate = useNavigate()
    const [input, setinput] = useState({
        title: "",
        category: "",
        price: "",
        image: ""

    })

    const handleInput = (e) => {
        const { name, value } = e.target

        setinput({ ...input, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = localStorage.getItem('dataKey') && localStorage.getItem('dataKey').length > 0 ? JSON.parse(localStorage.getItem('dataKey')) : []
        // console.log(data);
        const newRecords = {
            ...input, id: data.length+1
        }
        console.log(newRecords);

        localStorage.setItem('dataKey',JSON.stringify([...data,newRecords]))
        navigate(-1)
    }

    return (
        <div className='edit-box'>
            <form className='add-form'>
                <div className='add-input' >
                    <label>Title:</label>
                    <input type={'text'} name="title" value={input.title} onChange={handleInput} />
                </div>
                <div className='add-input'>
                    <label>Category:</label>
                    <input type={'text'} name="category" value={input.category} onChange={handleInput} />
                </div>
                <div className='add-input'>
                    <label>Price:</label>
                    <input type={'number'} name="price" value={input.price} onChange={handleInput} />
                </div>
                <div className='add-input'>
                    <label>Image:</label>
                    <input type={'file'} name="image" accept="image/png, image/gif, image/jpeg,image/svg" alt="" value={input.image} onChange={handleInput} />
                </div>
                <div className='add-btn-product'>

                    <button onClick={handleSubmit}  className="addproduct-btn">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Addproduct