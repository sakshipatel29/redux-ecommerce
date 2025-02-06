import React from 'react'
import { useSelector } from "react-redux";

const Navbar = () => {
    const amount = useSelector((store) => store.basket.amount)
    return (
        <div>
            <p>Home</p>
            <p>Basket
                <span>{amount}</span>
            </p>
        </div>
    )
}

export default Navbar