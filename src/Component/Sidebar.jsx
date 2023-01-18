import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem"
import logo from "../images/PngItem_195601.png"
import * as FaIcons from "react-icons/fa";

import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate()
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <AiIcons.AiFillHome />,
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaIcons.FaCartPlus />,
            // children: [
            //     {
            //         path: "/add"
            //     }
            // ]
        },
        {
            path: "/category",
            name: "Category",
            icon: <BsIcons.BsCaretDownSquareFill />,
            subNav: [
                {
                    path: "/category/electronics",
                    name: "Electronics"
                },
                {
                    path: "/category/jewelery",
                    name: "Jewelery"
                },
                {
                    path: "/category/mensClothing",
                    name: "Men's Clothing"
                },
                {
                    path: "/category/womensClothing",
                    name: "Women's Clothing"
                }
            ]

        }
    ]


    const handleLogout = (e) => {

        localStorage.removeItem('userToken')
        // navigate("/login")
    }

    return (
        <React.Fragment>

            <header>
                <div className='header-container'>
                    <div className='header-container-logo'>
                        <img src={logo} alt="" className='header-logo-image' />
                        <p><i>Shopping App</i></p>
                    </div>
                    <div className='header-container-admin-section'>
                        <div >
                            <FaIcons.FaUserCircle className='dropdown-icon' onClick={toggle} />

                            {
                                isOpen ? (<ul className="menu">
                                    <li className="menu-item">

                                        <button className='menu-item-btn'><FaIcons.FaUserCog />Setting</button>
                                    </li>
                                    <li className="menu-item">

                                        <button className='menu-item-btn'><FaIcons.FaPowerOff />Log Out</button>
                                    </li>
                                </ul>) : null
                            }


                        </div>
                    </div>
                </div>
            </header>
            <div className='container'>
                <div className="sidebar">
                    {
                        menuItem.map((item, index) =>  <SidebarItem key={index} item={item} />)
                    }


                </div>
                <main>
                    {children}
                </main>
            </div>
        </React.Fragment>

    )
}
// {
                            
//     return (
//         <>
//             <NavLink to={item.path} key={index} className="link" activeclassname="active">
//                 <div className="icon" >{item.icon}</div>
//                 <div className="link_text">{item.name}</div>

//             </NavLink>

//         </>
//     )

// }
export default Sidebar