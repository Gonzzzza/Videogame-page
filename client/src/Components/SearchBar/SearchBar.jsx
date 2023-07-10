import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNameGame, getGames } from "../redux/actions";
import s from './searchbar.module.css'
import { FaSearch } from 'react-icons/fa';

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    
    useEffect(() => {
		dispatch(getGames);
	}, [dispatch]);

    function handleInput(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault(); 
        dispatch(getNameGame(name))
    }

    /* const dishes = useSelector(state => state.filterDishes)
	const dispatch = useDispatch();

	const handleinput = async (e) => {
		if (!e.target.value) {
			dispatch(getFilterDishes())
		} else {
			dispatch(filtrar(dishes.filter(d => {
				if (d.lenguage.es.name.toLowerCase().includes(e.target.value.toLowerCase()) || d.lenguage.en.name.toLowerCase().includes(e.target.value.toLowerCase())) return d
			})))
		}
	} 
    */

    return(
        <div className={s.container} >
            <input 
                className={s.input}
                type='text'
                placeholder="¿A que jugamos hoy?"
                onChange={e => handleInput(e)}
            />
            {/* <button className={s.button} type="submit" onClick={e => handleSubmit(e)}> 
                Buscar 
            </button> */}
        </div>
    )
}