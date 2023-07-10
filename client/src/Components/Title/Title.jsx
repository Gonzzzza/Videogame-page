import React from "react";
import { Link } from "react-router-dom";

export default function Title() {
    return(
        <div className=''>
            <Link to='/home'>
                <h1>Henry Videogames</h1>
            </Link>
        </div>
    )
}