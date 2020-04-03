import {START_FETCH_TYPE,FETCH_TYPE_SUCCESS, FETCH_TYPE_ERROR} from './types';
import API from '../rest/api';

const startFetching = () =>{
    return{ 
        type: START_FETCH_TYPE,
        receivedDate: Date.now()
    }
}
const successFetching = (data) => {
    return{
        type: FETCH_TYPE_SUCCESS,
        payload: data,
        receivedDate: Date.now()
    }
}

const fetchingError = (data) => {
    return{
        type:FETCH_TYPE_ERROR,
        error: data,
        receivedDate: Date.now()
    }
}

export const fetchTypeWorkout = () => {
    return async (dispatch) => {
        dispatch(startFetching())
        return API.get('/workout/type')
        .then(result => {
            dispatch(successFetching(result.data))
        })
        .catch(error => {
            dispatch(fetchingError(error))
        })
    } 
}