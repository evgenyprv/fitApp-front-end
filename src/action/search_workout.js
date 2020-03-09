import {START_SEARCHING, SEARCHING_SUCCESS, SEARCHING_ERROR} from './types';
import API from '../rest/api';

const startFetching = () =>{
    return{
        type: START_SEARCHING,
        receivedDate: Date.now()
    }
}

const fetchingSuccess = (data) =>{
    return{
        type: SEARCHING_SUCCESS,
        payload: data,
        receivedDate: Date.now()
    }
}

const fetchingError = (err) => {
    return{
        type: SEARCHING_ERROR,
        error: err,
        receivedDate: Date.now()
    }
}

export const fetchWorkout = () => {
    return async (dispatch) => {
        dispatch(startFetching())
        return API.get()
        .then(result => {
            dispatch(fetchingSuccess(result.data))
        })
        .catch(error => {
            dispatch(fetchingError(error))
        })
    }
}