import {START_SEARCHING, SEARCHING_SUCCESS, SEARCHING_ERROR} from '../action/types'

const intialState = {
    isFetching: false,
    payload: {
        "BodyExercises": [],
        "CoreExercises": []
    },
}

export default function workoutReducer(state = intialState, action){
    switch(action.type){
        case START_SEARCHING:
                return Object.assign({}, state, {
                    isFetching: true, 
                    receivedDate: action.receivedDate,
                })
        case SEARCHING_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false, 
                payload: action.payload,
                receivedDate: action.receivedDate,
            })
        case SEARCHING_ERROR:
            return Object.assign({}, state, {
                isFetching: false, 
                error: action.error,
                receivedDate: action.receivedDate,
            })
        default:
            return state;
    }
}