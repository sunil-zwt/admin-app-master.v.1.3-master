import { useState } from "react"
import { NavLink, Link } from 'react-router-dom';
export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    if (item.subNav) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"} activeclassname="active" >
                <div className="sidebar-title">
                    <NavLink to={item.path} className={({ isActive }) =>
                        isActive ? 'active' : 'nav-link'
                    }>
                        <div className="icon" >{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </NavLink>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
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
                isActive ? 'active' : 'sidebar-item plain'} >
                <div className="icon" >{item.icon}</div>
                <div className="link_text">{item.name}</div>
            </NavLink>
        )
    }
}