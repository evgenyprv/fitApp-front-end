import {WORKOUT_LOC_ADDED,TYPE_WORKOUT_ADDED, INCLUDED_CARDIO,
     INCLUDED_CORE} from '../action/types';

export const addWorkoutLoc = (data) =>{
    return{
        type:WORKOUT_LOC_ADDED,
        payload: data,
    }
}

export const addTypeWorkout = (data) =>{
    return{
        type:TYPE_WORKOUT_ADDED,
        payload: data,
    }
}

export const addCardio = (data) => {
    return{
        type: INCLUDED_CARDIO,
        payload: data
    }
}

export const addCore = (data) => {
    return{
        type: INCLUDED_CORE,
        payload: data
    }
}