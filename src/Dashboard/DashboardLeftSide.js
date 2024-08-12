import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";

const DashboardLeftSide = () => {
    return (
        <div className="bg-[#2C4E80] text-white lg:h-screen">
            {/* normal user */}
            <ul className="menu  w-full p-0 [&_li>*]:rounded-none pt-4">
                <li className="text-lg hover:text-white font-semibold mb-2"><Link to="/dashboard/myOrders"><MdOutlineShoppingCart className="text-xl font-bold" />My Orders</Link></li>
                <hr/>
            </ul>
        </div>
    );
};

export default DashboardLeftSide;