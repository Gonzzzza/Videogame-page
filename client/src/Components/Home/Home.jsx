import React, { useState, useEffect }  from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import {getGames} from "../redux/actions";
import Games from "../Games/Games";
import Paginado from "../Paginado/Paginado";
import Filters from "../Filter/Filters";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import s from './Home.module.css';


export default function Home() { 
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.games)


    const [orden, setOrden] = useState('')
    const [currentaPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(16);
    const indexOfLastGame = currentaPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame)

    const handleClickPaginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
 
    useEffect(() => {
        dispatch(getGames()); 
        // console.log(currentGames)
    }, [dispatch]);

    return (
        <div>
            <div className={s.navBarContainer}>
                <NavBar />
            </div>
            {
                currentGames.length ? (

                        <div className={s.container}>
                    <div className={s.firstLineContainer}>
                        <div className={s.containerFilters}>
                                <Filters setCurrentPage={setCurrentPage} setOrden={setOrden} />
                        </div>
                    </div>
                    <div className={s.containerPaginate}>
                        <Paginado gamesPerPage={gamesPerPage} currentaPage={currentaPage} allGames={allGames.length} paginado={handleClickPaginate} />
                    </div>
                    <div className={s.containerGames}>
                        {
                            currentGames?.map(el => {
                                return(
                                    <Link to={'/detail/' + el.id} key={el.id} className={s.linkGameContainer}>
                                        <Games 
                                            key={el.id}
                                            name={el.name}
                                            image={el.image}
                                            rating={el.rating}
                                            genres={el.genres}
                                            />
                                    </Link>
                                );
                            })
                        }
                    </div>   
                    <div className={s.containerPaginate}>
                        <Paginado gamesPerPage={gamesPerPage} currentaPage={currentaPage} allGames={allGames.length} paginado={handleClickPaginate} />
                    </div>
                    <div className={s.containerFooter} >
                        <Footer />  
                    </div>
                </div>
                ) : (
                    <div className={s.loader}>
                        <Loader className={s.componentLoader} />
                    </div>
                )
            }
        </div>
    )
}