import {BACK_PAGE,NEXT_PAGE, RESET_PAGE} from '../action/types';

const initialState = {
    currentPage: 0
}

export default function changePageReducer(state = initialState, action){
    switch(action.type){
        case NEXT_PAGE:
            return Object.assign({}, state, {
                currentPage: action.payload
            })
        case BACK_PAGE:
            return Object.assign({}, state, {
                currentPage: action.payload
            })
        case RESET_PAGE:
            return Object.assign({}, state, {
                currentPage: action.payload
            })
        default: 
            return state
    }
}