import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


const Navber = () => {
    
     const routes = [
        { path: "/", name: "Home Page", id: "1" },
        { path: "/about", name: "About Us", id: "2" },
        { path: "/services", name: "Services", id: "3" },
        { path: "/contact", name: "Contact Us", id: "4" },
        { path: "/faq", name: "FAQ", id: "5" }
      ];
      const [open, setOpen] =useState(false)
      
      
    return (
        <div>
            <h3>hi</h3>
            <nav className="list-none">
                <div onClick={() => setOpen(!open)}>
                    {
                        open === true ? <IoMdClose></IoMdClose> : <HiOutlineMenu></HiOutlineMenu>
                    }
                
                </div>
               
                {
                    routes.map(route => <li key={route.id}>
                        <a href={`route.path`}>{route.name}</a>
                    </li>)
                }
            </nav>
        </div>
    );
};

export default Navber;