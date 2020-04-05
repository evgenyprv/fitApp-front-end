import React from 'react';

import TypeOfWorkout from '../panelcomponents/TypeOfWorkout.jsx'
import IncludePanel from '../panelcomponents/IncludePanel.jsx'

const GymWorkoutPanel = (props) => {

    const typeOptions = []
    const {workTypeError,handleTypeWorkoutChange,
        handleCardioChange,handleCoreChange, typeOfWorkoutList} = props
    
    typeOfWorkoutList.map((type, key) =>
        typeOptions.push({ key: key, text: type.workout_type, value: type.workout_type.toLowerCase()})
    )

    return(
        <div>
            <TypeOfWorkout 
                workTypeError ={workTypeError}
                typeOptions={typeOptions}
                handleTypeWorkoutChange={handleTypeWorkoutChange}/>
            <IncludePanel handleCardioChange={handleCardioChange}
                handleCoreChange={handleCoreChange}/>
        </div>
    )
}

export default GymWorkoutPanel;