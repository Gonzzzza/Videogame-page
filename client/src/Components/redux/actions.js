import axios from 'axios';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const GET_NAME_GAMES = 'GET_NAME_GAMES';
export const GET_GENRES = 'GET_GENRES';
export const GET_DETAILS = 'GET_DETAILS';
export const PAGE_DETAIL = 'PAGE_DETAIL';
export const FILTER_BY_CREATED = 'FILTER_BY_CREATED';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_RATING = 'FILTER_BY_RATING';
export const FILTER_GENRES = 'FILTER_GENRES';
export const POST_GAME = 'POST_GAME';

export function getGames(){
    return async function(dispatch) {
        try {
            const json = await axios.get('/videogames');
            const games = json.data;
            dispatch({
                type: GET_ALL_GAMES,
                payload: games,
            }) 
        } catch (error) {
            dispatch({
                type: Error,
                payload: error,
            })
        }
    }
} 

export function getNameGame(name) {
    return async function (dispatch) {
        try {
            const json = await axios.get('/videogames?name=' + name);
            const games = json.data
            dispatch({
                type: GET_NAME_GAMES,
                payload: games,
            })
        } catch (error) {
            dispatch({
                type: Error,
                payload: error
            })
        }
    }
}

export function getDetail(id){
    // console.log("hola", id)
    return async function (dispatch){
        try {
            const json = await axios.get('/videogame/' + id)
            const game = json.data;
            dispatch({
                type: GET_DETAILS,
                payload: game,
            })
        } catch (error) {
            dispatch({
                type: Error,
                payload: error,
            })
        }
    }
}

export function pageDetail(data = {}){
    return{
        type: PAGE_DETAIL,
        payload: data,
    }
}

export function getGenres(){
    return async function(dispatch){
        try {
            const json = await axios.get('/genres');
            const genres = json.data
            dispatch({
                type: GET_GENRES,
                payload: genres,
            })
        } catch (error) {
            dispatch({
                type: Error,
                payload: error,
            })
        }
    }
}

export function postGame (payload) {
    return async function(dispatch){
        try {
            const json = await axios.post('/videogames', payload )
            console.log({json});
            dispatch({
                type: POST_GAME
            });
        } catch (error) {
            console.log(error)
        }
    }

}

export function orderByName(payload) {
    return{
        type: FILTER_BY_NAME,
        payload
    };
};

export function orderByRating(payload){
    return{
        type: FILTER_BY_RATING,
        payload
    };
};

export function filterGenres (payload) {
    return{
        type: FILTER_GENRES,
        payload,
    }
}


export function filterByCreated(payload){
    return {
        type: FILTER_BY_CREATED,
        payload
    };
};

 

