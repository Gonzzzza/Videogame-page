import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getGames, 
        getGenres, 
        filterByCreated,
        orderByName,
        orderByRating,
        filterGenres,
} from "../redux/actions";
import s from './filters.module.css'


export default function Filters({ setCurrentPage, setOrden }) {

    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.genres);

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    const handleClick = (e) => { 
        e.preventDefault();
        dispatch(getGames());
    };

    const handleFilterCreate = (e) =>{
        e.preventDefault();
        dispatch(filterByCreated(e.target.value));
        setCurrentPage(1);
    }

    const handleSort = (e) => {
        e.preventDefault();
		e.target.value === 'all'
			? dispatch(orderByName) && setOrden(`ABC ${e.target.value}`)
			: dispatch(orderByName(e.target.value));
		setOrden(`ABC ${e.target.value}`);
		setCurrentPage(1);
    };

    const handleRating = (e) => {
        e.preventDefault();
        e.target.value === 'all' 
            ? dispatch(orderByRating) &&  setOrden(`Rating ${e.target.value}`)
            : dispatch(orderByRating(e.target.value));
        setOrden(`Rating ${e.target.value}`);
        setCurrentPage(1);
    };

    const handleGenres = (e) => {
        e.preventDefault();
        dispatch(filterGenres(e.target.value));
        setCurrentPage(1);
    }

    return (
        <div className={s.filterContainer}>
            <div className={s.restartContainer}>
                <button className={s.restartButton} onClick={e => handleClick(e)}> 
                        Reset 
                </button>
            </div>

            <div className={s.gamesContainer}>
                <select defaultValue={''} onChange={e => handleFilterCreate(e)} className={s.filterGames}> 
                        <option value='' disabled hidden>
                            Games
                        </option>
                        <option value='existing'> Existing </option>
                        <option value='create'> Creates </option>
                </select>
            </div>
            <div className={s.orderContainer}>
                <select defaultValue={''} onChange={e => handleSort(e)} className={s.filterVocal}> 
                        <option value='' disabled hidden> 
                            Alphabetical order
                        </option>
                        <option value='A-Z'> A - Z </option>
                        <option value='Z-A'> Z - A </option>
                </select>
            </div>
            <div className={s.ratingContainer}>
                <select defaultValue={''} onChange={e => handleRating(e)} className={s.filterRating}> 
                        <option value='' disabled hidden>
                            Rating
                        </option>
                        <option value='H-L'>Low</option>
                        <option value='L-H'>High</option>
                </select>
            </div>
            <div className={s.genresContainer}>
                <select defaultValue={''} onChange={(e) => handleGenres(e)} className={s.filterGenres}>
                        <option value='' disabled hidden>
                                Genres
                        </option>
                        {allGenres?.map((e) => {
                            return (
                                <option key={e.id} value={e.name}>
                                    {e.name}
                                </option>
                            );
                        })
                        }
                </select>
            </div>

            {/* <div className={s.paginateContainer}></div> */}

        </div>
    )
}