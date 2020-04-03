import {START_SEARCHING, SEARCHING_SUCCESS, SEARCHING_ERROR, CLEAR_DATA} from './types';
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

export const clearData = () => {
    return{
        type: CLEAR_DATA,
        receivedDate: Date.now()
    }
}

const fetchWorkoutByType = (workout_type, location) => {
    return async (dispatch) => {
        dispatch(startFetching())
        return API.get('/workout/'+location,{
            params: {
                type: workout_type
            }
        })
        .then(result => {
            dispatch(fetchingSuccess(result.data))
        })
        .catch(error => {
            dispatch(fetchingError(error))
        })
    }
}

const fetchRandomWorkout = () => {
    return async (dispatch) => {
        return API.get('/workout/random')
        .then(result => {
            dispatch(fetchingSuccess(result.data))
        })
        .catch(error => {
            dispatch(fetchingError(error))
        })
    }
}

export const fetchWorkout = (workout_type, location, cardio, core) => {
    return async (dispatch) => {
        dispatch(startFetching())
        if(workout_type === "random"){
            return await dispatch(fetchRandomWorkout())
        }else{
            return await dispatch(fetchWorkoutByType(workout_type, location))
        }
    }
}