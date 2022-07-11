import React from "react";
import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <div className="logo">
                    <h1 className="logo__title">JSONIFY</h1>
                    <div className="triangle__left">
                        <div className="triangle__one"></div>
                        <div className="triangle__two"></div>
                    </div>
                    <div className="triangle__right">
                        <div className="triangle__one"></div>
                        <div className="triangle__two"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header