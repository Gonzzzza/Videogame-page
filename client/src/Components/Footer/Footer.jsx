import React from "react";
import s from './Footer.module.css';
import { Link } from "react-router-dom";
import logoImage from '../images/landingPage.jpeg'


export default function Footer() {
    return(
        <footer className={s.container}>
            <div className={s.logoContainer}>
                <Link to={'/home'} onClick={() => window.location.reload()}>
                    <img src={logoImage} className={s.logoImage} alt="Videogame App"/>
                    {/* <img src={''} className={s.logoImage} alt="" /> */}
                </Link>
                <h2 className={s.containerTitle} onClick={() => window.location.reload()}>
                    <Link to={'/home'} className={s.title}>
                    Henry Videogames Project
                    </Link>
                </h2>
            </div>
            <div className={s.dateContainer}>
                2022 © Diseño y desarrollo {' '}
                <a href="https://github.com/Gonzzzza" className={s.linkGit} target='_blank' rel="noreferrer">
                    Gonzalo N. Trevisani
                </a>
            </div>
        </footer>
    )
}