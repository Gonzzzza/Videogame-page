import {    GET_ALL_GAMES, 
            GET_NAME_GAMES,
            GET_GENRES,
            GET_DETAILS,
            PAGE_DETAIL,
            FILTER_BY_CREATED, 
            FILTER_BY_NAME, 
            FILTER_BY_RATING, 
            FILTER_GENRES,
            POST_GAME,
         } from "./actions";

const initialState = {
    games: [],
    allGames: [],
    genres: [],
    detail: [],
}
const RootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_GAMES:
            return{
                ...state,
                games: action.payload,
                allGames: action.payload
            }
        case GET_NAME_GAMES:
            return{
                ...state,
                games: action.payload
            }
        case GET_GENRES:
            return{
                ...state,
                genres: action.payload
            }
        case GET_DETAILS:
            return{
                ...state,
                detail: action.payload,
            }
        case POST_GAME: 
            return{
                ...state,
            }
        case FILTER_GENRES:
            const gamesByGenres = action.payload;
            state.games = state.allGames.filter((g) => 
                    g.genres?.includes(gamesByGenres));
            if(action.payload === 'all') state.games = state.allGames;
            if(state.games.length === 0){
                alert('Videojuego no encontrado')
                state.games = state.allGames;
            }
            return{
                ...state,
                games: state.games
            }
            case FILTER_BY_NAME:
                let sortArr = action.payload === 'A-Z' ?
                state.games.sort(function(a, b){
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                }) :
                state.games.sort(function(a, b) {
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    games: sortArr
                }
                case FILTER_BY_RATING:
                    let ratingSort = action.payload === 'H-L' ?
                    state.games.sort(function(a, b){
                        if(a.rating > b.rating){
                            return 1;
                        }
                        if(b.rating > a.rating){
                            return -1;
                        }
                        return 0;
                    }) :
                    state.games.sort(function(a, b) {
                        if(a.rating > b.rating){
                            return -1;
                        }
                        if(b.rating > a.rating){
                            return 1;
                        }
                        return 0;
                    })
                    return {
                        ...state,
                        games: ratingSort
                    }
                case PAGE_DETAIL: 
                    return{
                        ...state,
                        detail: action.payload,
                    }
                case FILTER_BY_CREATED:
                    const filterCreated = action.payload === 'create' ? state.allGames.filter(el => el.createdInDb) : state.allGames.filter(el => !el.createdInDb);
                    return {
                        ...state,
                        games: action.payload === 'all' ? state.allGames : filterCreated
                    }
                default: return state;
            }
        }
            
export default RootReducer