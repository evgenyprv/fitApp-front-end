import {BACK_PAGE,NEXT_PAGE, ADD_BODY_HEADER, 
    ADD_CORE_HEADER, ADD_CARDIO_HEADER,RESET_PAGE} from './types';

const goToBackPage = (page) => {
    return{
        type:BACK_PAGE,
        payload: page
    }
}

const goToNextPage = (page) => {
    return{
        type:NEXT_PAGE,
        payload: page
    }
}

const addCardioHeader = (active, disabled, completed) => {
    return{
        type: ADD_CARDIO_HEADER,
        payload: {
            key: 'cardio_header',
            active: active, 
            disabled: disabled,
            completed: completed,
            icon: 'heartbeat',
            title: 'Cardio',
        }
    }
}

const addBodyHeader = (active, disabled, completed) => {
    return{
        type: ADD_BODY_HEADER,
        payload: {
            key: 'body_header',
            active: active, 
            disabled: disabled,
            completed: completed,
            icon: 'user',
            title: 'Body',
        }
    }
}

const addCoreHeader = (active, disabled, completed) => {
    return{
        type: ADD_CORE_HEADER,
        payload: {
            key: 'core_header',
            active: active, 
            disabled: disabled,
            completed: completed,
            icon: 'shield',
            title: 'Core',
        }
    }
}

export const changeHeaderToCompleted = (data) => {
    return (dispatch) => {
        switch(data){
            case "cardio_header":
                dispatch(addCardioHeader(false, false, true))
                break
            case "body_header":
                dispatch(addBodyHeader(false, false, true))
                break
            case "core_header":
                dispatch(addCoreHeader(false, false, true))
                break
            default:
                /* falls through */
        }
    }
}

export const changeHeaderToActive = (data) => {
    return (dispatch) => {
        switch(data){
            case "cardio_header":
                dispatch(addCardioHeader(true, false, false))
                break
            case "body_header":
                dispatch(addBodyHeader(true, false, false))
                break
            case "core_header":
                dispatch(addCoreHeader(true, false, false))
                break
            default:
                /* falls through */
        }
    }
}

export const changeHeaderToDisabled = (data) => {
    return (dispatch) => {
        switch(data){
            case "cardio_header":
                dispatch(addCardioHeader(false, true, false))
                break
            case "body_header":
                dispatch(addBodyHeader(false, true, false))
                break
            case "core_header":
                dispatch(addCoreHeader(false, true, false))
                break
            default:
                /* falls through */
        }
    }
}


export const loadHeaders = (data) => {
    return (dispatch) => {
        let disabled = false
        let active = true
        for (let i = 0; i < data.length; i++){
            if(data[i] === "cardio"){
                dispatch(addCardioHeader(active, disabled, false))
            }else if(data[i] === "body"){
                dispatch(addBodyHeader(active, disabled, false))
            }else if(data[i] === "core"){
                dispatch(addCoreHeader(active, disabled, false))
            }
            disabled = true
            active = false
        }
    }
}

export const changePage = (data) => {
    return (dispatch) => {
        if(data.direction === 'next'){
            dispatch(goToNextPage(data.currentPage))  
        }else{
            dispatch(goToBackPage(data.currentPage))
        }
    }
}

export const resetPage = () => {
    return{
        type: RESET_PAGE,
        payload: 0
    }
}