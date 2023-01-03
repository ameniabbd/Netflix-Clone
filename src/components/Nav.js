import React,{useState,useEffect} from "react";
import "./nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll',transitionNavBar);
    return()=>window.removeEventListener('scroll',transitionNavBar)
  }, []);
  return (
    <div className={`nav ${show &&'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;