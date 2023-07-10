import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, pageDetail } from "../redux/actions";
import NavBar from '../NavBar/NavBar';
import Loader from '../Loader/Loader'
import Footer from "../Footer/Footer";
import s from './GameDetail.module.css';
import { Link, useParams } from "react-router-dom";

export default function GameDetail(props){
    const dispatch = useDispatch();
    const myGame = useSelector((state) => state.detail);
    const { id } = useParams();

    useEffect( () => {
        dispatch(getDetail(id)); 
        // console.log(id)
        return () => {
            dispatch(pageDetail());
        };
    }, [dispatch, id]);

    return(
        <div className="">
            <NavBar />
            {
                myGame ? (
                    <div className={s.containerGeneral}>
                        <div className={s.buttonBack}>
                            <Link to={'/home'}>
                                <button>Back</button>
                            </Link>
                        </div>
                        <div className={s.containerGame}>
                            <div className={s.containerTitle}>
                                <h1 className={s.title}>{myGame.name}</h1>
                            </div>
                            <div className={s.containerSection}>
                                <div className={s.containerImage}>
                                    <img src={myGame.image ? myGame.image : myGame.img} className={s.image} alt='' />
                                </div>
                                <div className={s.containerDates}> 
                                    <div className={s.containerParagraphs}>
                                        <p className={s.description}>{myGame.description}</p>
                                        <p className={s.rating}> {myGame.rating} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Loader />
                )
            }
            <Footer />
        </div>
    )
}