import { Notifications, Search, ArrowDropDown } from "@material-ui/icons"
import "./navbar.scss"
import React, {useState} from "react";
const Navbar = () => {

    const [isScrolled,setisScrolled] = useState(false);
    window.onscroll = () =>{
        setisScrolled(window.pageYOffset ===0 ?false : true);
        return () => (window.onscroll = null);
    };

    console.log(isScrolled);
    return (
        <div className={isScrolled? "navbar scrolled" : "navbar"}>
           <div className="container">
               <div className="left">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
                   <span>Home Page</span>
                   <span>Series</span>
                   <span>Movies</span>
                   <span>Popular</span>
                   <span>My list</span>
               </div>
               <div className="right">
                    <Search className="icons"/>
                    <span>KID</span>
                    <Notifications className="icons"/>
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                    <div className="profile">
                    <ArrowDropDown className="icons"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                    
                </div>
                
           </div>
        </div>
    )
}

export default Navbar