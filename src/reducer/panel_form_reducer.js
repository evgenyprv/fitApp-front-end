import {WORKOUT_LOC_ADDED,TYPE_WORKOUT_ADDED, INCLUDED_CARDIO, 
    INCLUDED_CORE} from '../action/types';

const initialState={
    workoutLocation: '',
    typeOfWorkout: '',
    included: {
        cardio: false,
        core: false,
    },
}

export default function panelReducer(state=initialState, action){
    switch(action.type){
        case WORKOUT_LOC_ADDED:
            let newState = initialState
            newState['workoutLocation'] = action.payload
            return Object.assign({}, state, newState)
        case TYPE_WORKOUT_ADDED:
            return Object.assign({}, state, {
                typeOfWorkout: action.payload,
            }) 
        case INCLUDED_CARDIO:
            return Object.assign({}, state, {
                included: {
                    cardio: action.payload,
                    core: state.included.core,
                }
            }) 
        case INCLUDED_CORE:
            return Object.assign({}, state, {
                included: {
                    cardio: state.included.cardio,
                    core: action.payload
                }
            })
        default:
            return state;
    }
}