import React from 'react';

import TypeOfWorkout from '../panelcomponents/TypeOfWorkout.jsx'
import IncludePanel from '../panelcomponents/IncludePanel.jsx'

const GymWorkoutPanel = (props) => {

    const typeOptions = []

    props.typeOfWorkoutList.map((type, key) =>
        typeOptions.push({ key: key, text: type.workout_type, value: type.workout_type.toLowerCase()})
    )

    return(
        <div>
            <TypeOfWorkout typeOptions={typeOptions}
                handleTypeWorkoutChange={props.handleTypeWorkoutChange}/>
            <IncludePanel handleCardioChange={props.handleCardioChange}
                handleCoreChange={props.handleCoreChange}/>
        </div>
    )
}

export default GymWorkoutPanel;