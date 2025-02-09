import React from 'react';
import { useSelector } from "react-redux";
import './Navbar.css';

const Navbar = () => {
    const amount = useSelector((store) => store.basket.amount);

    return (
        <nav className="navbar">
            <p className="nav-item">Home</p>
            <p className="nav-item">
                Basket <span className="basket-count">{amount}</span>
            </p>
        </nav>
    );
};

export default Navbar;
