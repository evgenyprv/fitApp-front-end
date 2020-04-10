import {RESET} from './types';

export const clearData = () => {
    return{
        type: RESET,
        receivedDate: Date.now()
    }
}
