import { useEffect,useRef } from "react";
import { useState } from "react"
import { NavLink, Link } from 'react-router-dom';
export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false);

    const subnavRef = useRef()
    useEffect(()=>{
        
        let handler = (e)=>{
            if(!subnavRef.current.contains(e.target)){
                console.log(subnavRef.current);
                setOpen(false)
            }

          
        }
        document.addEventListener("mouseup",handler)
        return ()=>{
            document.removeEventListener("mouseup",handler)
        }
    },[])
    if (item.subNav) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"} activeclassname="active"  ref={subnavRef}>
                <div className="sidebar-title"  onClick={() => setOpen(!open)}>
                    <NavLink to={item.path} className={({ isActive }) =>
                        isActive ? 'active' : 'nav-link'
                    }>
                        <div className="icon" >{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    <i className="bi-chevron-down toggle-btn"></i>
                    </NavLink>
                </div>

                {
                    open ? (<div className="sidebar-content">
                        {item.subNav.map((child, index) => <SidebarItem key={index} item={child} />)}
                    </div>) : null
                }

            </div>
        )
    } else {
        return (
            <NavLink to={item.path || "#"} className={({ isActive }) =>
                isActive ? 'active' : 'sidebar-item plain'}>
                <div className="icon" >{item.icon}</div>
                <div className="link_text">{item.name}</div>
            </NavLink>
        )
    }
}