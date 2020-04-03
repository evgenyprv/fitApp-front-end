import {START_FETCH_TYPE,FETCH_TYPE_SUCCESS, FETCH_TYPE_ERROR} from '../action/types';

const intialState = {
    isFetching: false,
    payload: []
}

export default function panelReducer(state=intialState, action){
    switch(action.type){
        case START_FETCH_TYPE:
            return Object.assign({}, state, {
                isFetching: true,
                receivedDate: action.receivedDate,
            })
        case FETCH_TYPE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                payload: action.payload,
                receivedDate: action.receivedDate,
            })
        case FETCH_TYPE_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                error:action.payload,
                receivedDate: action.receivedDate,
            })
        default:
            return state;
    }

}