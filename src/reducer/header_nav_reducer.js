import {CHANGE_CARDIO_HEADER, CHANGE_BODY_HEADER, 
    CHANGE_CORE_HEADER, ADD_HEADERS, RESET} from '../action/types';

const initialState = {
    cardioHeader: {},
    bodyHeader: {},
    coreHeader: {},
}

export default function changePageReducer(state = initialState, action){
    switch(action.type){
        case ADD_HEADERS:
            return Object.assign({}, state, action.payload)
        case CHANGE_CARDIO_HEADER:
            return Object.assign({}, state,{
                cardioHeader: action.payload
            })
        case CHANGE_BODY_HEADER:
            return Object.assign({}, state,{
                bodyHeader: action.payload
            })
        case CHANGE_CORE_HEADER:
            return Object.assign({}, state,{
                coreHeader: action.payload
            })
        case RESET:
            return Object.assign({}, state, initialState)
        default: 
            return state
    }
}