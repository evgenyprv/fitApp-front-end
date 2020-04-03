export const workoutLocValidation = (location) => {
    if(location.length === 0){
        return true
    }
    return false
}

export const workoutTypeValidation = (type) => {
    if(type.length === 0) {
        return true
    }
    return false
}