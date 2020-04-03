import React from 'react';
import TypeOfWorkout from '../panelcomponents/TypeOfWorkout';

const HomeWorkoutPanel = ({typeOfWorkoutList, handleTypeWorkoutChange}) => {

    const typeOptions = []

    typeOfWorkoutList.map((type, key) =>
        typeOptions.push({ key: key, text: type.workout_type, value: type.workout_type.toLowerCase()})
    )

    return(
        <TypeOfWorkout typeOptions={typeOptions}
            handleTypeWorkoutChange={handleTypeWorkoutChange}/>
    )
}

export default HomeWorkoutPanel;