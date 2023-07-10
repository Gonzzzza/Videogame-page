import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { getGenres, postGame,  } from "../redux/actions";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import s from './CreateVideogame.module.css';
import { NavLink } from 'react-router-dom';

function validate (input) {
    let errors = {};

    if(!input.name) {
        errors.name = 'El nombre es requerido'
    } else if(!/^[a-zA-Z0-9-() .]+$/.test(input.name)){
        errors.name = 'Solo se aceptan letras, numeros, guiones medios y parentesis'
    };

    if(input.image.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.image)){
        errors.image='invalid URL'
    };

    if(!input.description) {
        errors.description = 'La descripcion es requerida'
    } else if (input.description.length > 100) {
        errors.description = 'La descripcion es muy larga. (Max = 100 caracteres)'
    }

    if(!input.released) {
        errors.released = 'La fecha de lanzamiento es requerida'
    }

    if(!input.rating) {
        errors.rating = 'El rating es requerido'
    } else if(input.rating > 5) {
        errors.rating = 'El rating no debe ser mayor a 5'
    } else if(input.rating < 0) {
        errors.rating = 'El rating no puede ser un numero negativo'
    }

    return errors;
};

const CreateVideogame = () => {
    const [input, setInput] = useState({
        name: "",
        description: "",
        image: "",
        released: "", 
        rating: "",
        platforms: [],
        genres: [],
    })
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const generos = useSelector((state) => state.genres);
    
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postGame(input));
          setInput({
            name: "",
            image: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: [],
          });
          alert("Felicidades, el juego fue creado exitosamente.");
          navigate('/home');
        }

        
    function handleChange(e) {
        e.preventDefault();
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(validate({
            ...input,
            [e.target.name]: [e.target.value]
        }))
    }


    function handleGenres(e) {
        if(!input.genres.includes(e.target.value)) {
          setInput({
            ...input,
            genres: [...input.genres, e.target.value],
          })
        }
    }

    function handleDeleteG(e) {
        setInput({
          ...input,
          genres: input.genres.filter((gen) => gen !== e)
        });
    }

    return(
        <div >
            {/* <div> */}
            <NavBar />
            {/* </div> */}
            <form onSubmit={(e) => handleSubmit(e)} className={s.box_form}>
                <div className={s.form}>
                <h2 className={s.titulo}> Crea tu propio videojuego </h2>  
                    
                    {/* ================== SECTION NAME =============== */}
          
                    <div className={s.grupo}>
                        <input className={s.create_input}
                            type="text"
                            required
                            name="name"
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                        /> <span className={s.barra}></span>
                        <label className={s.label}>Nombre: </label>
                        {
                            errors.name && (
                                <p className={s.danger}>{errors.name}</p>
                        )}
                    </div>

                    {/* ==================== SECTION IMAGE =============== */}
                    
                    <div className={s.grupo}>
                        <label className={s.label}>Imagen URL: </label>
                        <input
                            className={s.create_input}
                            type="text"
                            name="image"
                            value={input.image}
                            onChange={(e) => handleChange(e)}
                        /> <span className={s.barra}></span>
                        {
                            errors.image && (
                                <p className={s.danger}>{errors.image}</p>
                                )}
                    </div>
                
                    {/* ==================== SECTION LAUNCH =============== */}
                    <div className={s.grupo}>
                        <input
                            className={s.create_input}
                            required
                            type='date'
                            name="released"
                            value={input.released}
                            onChange={(e) => handleChange(e)}
                        /><span className={s.barra}></span>
                        <label className={s.label}>Fecha de lanzamiento: </label>
                        {
                            errors.released && (
                            <p className={s.danger}>{errors.released}</p>
                        )}
                    </div>
                    {/* ================== SECCION RATING =============== */}
                    <div className={s.grupo}>
                        <input
                            className={s.create_input}
                            required
                            type="number"
                            name="rating"
                            step='0.1'
                            min='0'
                            max='5'
                            value={input.rating}
                            onChange={(e) => handleChange(e)}
                        /> <span className={s.barra}></span>
                        <label className={s.label}>Rating: </label>
                        {
                            errors.rating && (
                            <p className={s.danger}>{errors.rating}</p>
                        )}
      
                    </div>
                    {/* ================== SECCION GENEROS =============== */}
                    <div className={s.grupo}>
                        <select className={s.select_create} id="genres" defaultValue="" onChange={(e) => handleGenres(e)}>
                            <option className={s.option_create} value='' disabled hidden>Elija los géneros...</option>
                            {generos.map((g) => {
                                return (
                                    <option className={s.option_create} key={g.id} value={g.name}>{g.name}</option>
                                    );
                                })}
                        </select> <span className={s.barra}></span>
                        <label className={s.label}>Generos: </label>
                        {
                            input.genres.map((g) => (
                            <div className={s.box_opcion}>
                                <div className={s.opcion_title}>{g}</div>
                                <button className={s.btn_remove} onClick={() => handleDeleteG(g)} key={g} value={g}><span className={s.x} key={g}>x</span></button>
                            </div>
                            ))
                        }
                    </div>
                    { /* ================== SECCION PLATAFORMAS =============== */}
                    <div className={s.grupo}>
                        <label className={s.label} >Platforms: </label>
                        <input type="text" className={s.create_input}/>
                    </div>

                    { /* ================== SECCION DESCRIPTION =============== */}
                    <div className={s.grupo}>
                        <textarea
                            className={s.create_input}
                            required
                            type="text"
                            name="description"
                            value={input.description}
                            onChange={(e) => handleChange(e)}
                        ></textarea>
                        <label className={s.description}>Descripcion: </label>
                        {
                            errors.description && (
                                <p className={s.danger}>{errors.description}</p>
                                )}
                    </div>
                    <div className={s.containerFinal}>
                        <div className={s.containerButtonSubmit}>
                            <button className={s.btn_submit} type="submit">Crear Videojuego</button>
                        </div>
                        <div className={s.containerButtonCancel}>
                            <NavLink to={'/home'} className={s.back_home}>Cancelar</NavLink>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </div>

    )
}

export default CreateVideogame;