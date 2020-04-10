import {START_SEARCHING, SEARCHING_SUCCESS, 
    SEARCHING_ERROR} from './types';
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


export const fetchWorkout = (workout_type, location, cardio, core) => {
    return async (dispatch) => {
        dispatch(startFetching())

        const response = API.post('/workout/',{
            location: location,
            type: workout_type,
            cardio: cardio,
            core: core,
        })
        .then(result => {
            dispatch(fetchingSuccess(result.data))
            return result.data
        })
        .catch(error => {
            dispatch(fetchingError(error))
            throw(error)
        })

        return response
    }
}