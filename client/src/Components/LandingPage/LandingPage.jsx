import React from "react";
import s from '../LandingPage/LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={s.containerGlobal}>
            <div className={s.container}>
                <div className={s.columna1}>
                    <p>Welcome to the </p>
                    <h1>Videogame App</h1>
                    <button className={s.buttonPlay}>
                        <a href="/home" className={s.buttonText}>Let's go!</a>
                    </button>    
                </div>
                <div className={s.columna2}>
                </div>
            </div>
        </div>
    );
}


export default LandingPage;