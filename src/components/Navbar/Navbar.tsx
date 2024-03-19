import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/carIcon.jpg";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuStyle = isMobileMenuOpen? [styles.menu, styles.active].join(' ') : [styles.menu].join('') ;

  return (
    <header className={styles.navbar}>
      <a href="/">
        <img src={logo} alt="a red car" />
        <h3>Rent Your Car</h3>
      </a>
      <nav>
        <ul className={menuStyle}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/addNewCar">Add a new car</a>
          </li>
          <li>
            <a href="/updateCar">Update car availability</a>
          </li>
        </ul>
      </nav>
      <div className={styles.mobile_menu_btn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? (
          <AiOutlineClose size={50} />
        ) : (
          <AiOutlineMenu size={50} />
        )}
      </div>
    </header>
  );
};

export default Navbar;