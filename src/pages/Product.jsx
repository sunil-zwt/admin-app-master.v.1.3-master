import axios from "axios";
import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes} from "react-router-dom";
// import Navbar from "./Navbar";
import "../css/product.css";
import * as FaIcons from "react-icons/fa";
// import AddProduct from "./AddProduct";
// import DeleteProduct from "./DeleteProduct";
import Header from "../Component/Header";
import Button from "../Component/Button";
import { Outlet } from "react-router-dom";
import Sipnner from "../Component/Sipnner";
// import Addproduct from "./Addproduct";
// import Addproduct from "./Addproduct";


const renderData = (data) => {
    return (
        <>


            <table >
                <thead>
                    <tr>

                        <th >Product</th>
                        <th >category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((product) => {
                            return (
                                <tr key={product.id} className={"card"}>
                                    <td className="product">
                                        {/* <div className="product"> */}
                                        <img src={product.image} className="card-img" />
                                        <span>{product.title}</span>
                                        {/* </div> */}


                                    </td>
                                    <td className="category">{`${product.category}`}</td>
                                    <td className="price">{` ${"$" + product.price}`}</td>
                                    {/* <DeleteProduct data={data}/> */}



                                    <td ><Button product={product}  /></td>

                                </tr>
                            );
                        })}
                </tbody>
            </table>

        </>

    );
};

function Product({ children }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(6);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    //   const [arr, setArr] = useState([]);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    })

    let prUrl = "https://fakestoreapi.com/products/ ";
    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('dataKey'))
        // console.log(localData.length)
        if (localData && localData.length > 21) {
               setData(localData)
               setTimeout(() => {
                setLoading(false)
              }, 2000);
        } else if(localData){
                setData(localData)
                setTimeout(() => {
                    setLoading(false)
                  }, 2000);
        }
        else {

            axios({ method: "GET", url: prUrl })
                .then((response) => {
                    setData(response.data)
                    localStorage.setItem("dataKey", JSON.stringify(response.data));

                })
                .catch((e) => console.log(e))
                .finally(() => setLoading(false));
        }



    }, []);

    // console.log(data);

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const handlePrevbtn = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }
    return (
        <>


            {/* <Navbar /> */}
            <Header />
            <Outlet />
            {loading ? (
               <Sipnner/>
            ) : (

                <>
                    {renderData(currentItems)}
                    <div >
                    <ul className="pageNumbers">
                        <li >
                           
                             <FaIcons.FaAngleDoubleLeft  onClick={handlePrevbtn}
                                disabled={currentPage == pages[0] ? true : false} />  
                           
                        </li>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}

                        <li>
                            
                              <FaIcons.FaAngleDoubleRight   onClick={handleNextbtn}
                                disabled={currentPage === pages[pages.length - 1] ? true : false}/>
                           
                        </li>
                    </ul>
                    </div>
                   

                </>


            )}




        </>
    );
}

export default Product;
