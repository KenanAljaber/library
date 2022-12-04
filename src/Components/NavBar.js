import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css"
import closeNav from "../Assets/closeNav.png";
import openNav from "../Assets/openNav.png";
const NavBar = () => {
    const [navBarStyle,setnavBarStyle]=useState();
    const [navItemStyle,setNavItemStyle]=useState("navItem");
    const [navImage,setNavImage]=useState(openNav);
    const [navOpened,setNavOpened]=useState(false);
    const navImageRef= useRef(null);
    const navbarContainer= useRef(null);

    useEffect(()=>{
        onResize();
    },[]);
    const onResize=()=>{
        if(window.innerWidth<700){
            setnavBarStyle("side-navBar");
            openCloseNav();
            /*if(!navOpened){
                setNavItemStyle("closedSideNavItems");
                console.log("here from window");
            }*/
            
            navImageRef.current.style.display="block";

        }else{
            setnavBarStyle("navbar-container");
            navImageRef.current.style.display="none";
            setNavItemStyle("opensideNavItems");
            navbarContainer.current.style.width="100%";

           

        }
};

    window.addEventListener(("resize"),onResize);

    function openCloseNav(){
       setNavOpened(!navOpened);
       if(navOpened){
        //navbar is opened
        setNavImage(closeNav);

        let menuWidth=window.innerWidth/2;
        navImageRef.current.style.top="15px";
        navImageRef.current.style.left=(menuWidth -70)+"px";
        navImageRef.current.style.transition="1s";
        navbarContainer.current.style.display="flex";
        
        navbarContainer.current.style.width=menuWidth+"px";
        setNavItemStyle("opensideNavItems");
        
       }else{
        //navbar is closed
        setNavImage(openNav);
        setNavItemStyle("closedSideNavItems");
        
        navbarContainer.current.style.width=0+"px";
        navImageRef.current.style.left=20+"px";
       }
    }
    return ( 
        <div>
            <img className="navImage" src={navImage} ref={navImageRef} width="25px" onClick={openCloseNav}/>
        <div ref={navbarContainer} className={navBarStyle}>
            <p className={navItemStyle}><Link to="/">Home</Link></p>
            <p className={navItemStyle}><Link to="/create-book">Add Book</Link></p>
            

        </div>
        </div>
     );
}
 
export default NavBar;