import React from "react";
import s from './Games.module.css';

export default function Games({ name, image, genres, rating}){
    
    return (
        <div className={s.container}> 
            <img src={image} alt='' className={s.image} />
            <div className={s.containerDate}>
                <h3 className={s.title} > { name } </h3>
                {/* {/* <h4 className={s.rating}> Rating: { rating } </h4> */}
                <h4 className={s.genres}> { genres.join(' - ')} </h4> 
            </div>
        </div>
    );
};