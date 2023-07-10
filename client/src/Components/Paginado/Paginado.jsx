import React from "react";
import s from './Paginado.module.css';

export default function Paginado( { gamesPerPage, allGames, paginado, currentaPage } ){
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(allGames/gamesPerPage); i++) {
        pageNumbers.push(i);
    }

    return( 
        <nav className={s.navContainer}>
            <ul className={s.ulPaginate}>
                {
                    pageNumbers?.map(number => (
                        <button key={number} className={`${s.buttonPaginate} ${currentaPage === number ? s.activo : ''}`}>
                            <a
                               onClick={() => paginado(number)}  
                               key={number}>{number}</a>
                        </button>
                    ))
                }
            </ul>
        </nav>
    )
}