import {ADD_BODY_HEADER, ADD_CORE_HEADER, ADD_CARDIO_HEADER} from '../action/types';

const initialState = {
    cardioHeader: {},
    bodyHeader: {},
    coreHeader: {},
}

export default function changePageReducer(state = initialState, action){
    switch(action.type){
        case ADD_CARDIO_HEADER:
            return Object.assign({}, state,{
                cardioHeader: action.payload
            })
        case ADD_BODY_HEADER:
            return Object.assign({}, state,{
                bodyHeader: action.payload
            })
        case ADD_CORE_HEADER:
            return Object.assign({}, state,{
                coreHeader: action.payload
            })
        default: 
            return state
    }
}