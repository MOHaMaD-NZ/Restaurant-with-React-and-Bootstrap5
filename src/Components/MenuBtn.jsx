import React from "react";
import { Link } from "react-router-dom";

function MenuBtn() {
    return(
        <div>
            <Link to='/menu'>
            <button className="btn btn-success btn-lg">
                لیست غذاها
            </button>                              
            </Link>
        </div>
    )
}

export default MenuBtn