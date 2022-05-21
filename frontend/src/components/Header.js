import React from "react";
import './Header.css';

const Header = ({ logo }) => {
    return (
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 md:space-x-10">
                    <a href="#">
                        <img className="h-10 w-auto sm:h-20" src={logo} alt="" />
                    </a>
                    <h1 className="font-bold text-5xl">Herzlich Willkommen in <span className="color-blue">Cyber</span><span className="color-orange">City</span></h1>
                    <div>
                        <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white background-blue login-hover"> Login </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;