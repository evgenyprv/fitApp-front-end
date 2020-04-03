import {START_SEARCHING, SEARCHING_SUCCESS, SEARCHING_ERROR, 
    CLEAR_DATA} from '../action/types'

const intialState = {
    isFetching: false,
    payload: {
        exercises: {
            "Cardio": [],
            "Body": [],
            "Core": [],
        }
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
        case CLEAR_DATA:
            return Object.assign({}, state, intialState)
        default:
            return state;
    }
}