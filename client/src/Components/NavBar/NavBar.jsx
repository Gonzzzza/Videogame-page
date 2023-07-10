import React from "react";
import { Link } from "react-router-dom";
import s from './NavBar.module.css'
import logoImage from '../images/landingPage.jpeg';

export default function NavBar (){

    return (
        <div className={s.container}>
            <div className={s.contenedor1}>
                <Link to={'/home'}>
                    <img src={logoImage} alt="Videogame App"/>
                </Link>
            </div>
            <div className={s.contenedor2}>
                <div className={s.buttonHome}>
                    <Link to={'/home'}>
                        <button>Home</button>
                    </Link>
                </div>
                <div className={s.buttonCreate}>
                    <Link to={'/create'}>
                        <button>Create Videogame</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}