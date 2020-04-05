import React from 'react';
import TypeOfWorkout from '../panelcomponents/TypeOfWorkout';

const HomeWorkoutPanel = (props) => {

    const typeOptions = []
    const {workTypeError, typeOfWorkoutList, handleTypeWorkoutChange} = props

    typeOfWorkoutList.map((type, key) =>
        typeOptions.push({ key: key, text: type.workout_type, value: type.workout_type.toLowerCase()})
    )

    return(
        <TypeOfWorkout 
            workTypeError={workTypeError}
            typeOptions={typeOptions}
            handleTypeWorkoutChange={handleTypeWorkoutChange}/>
    )
}

export default HomeWorkoutPanel;