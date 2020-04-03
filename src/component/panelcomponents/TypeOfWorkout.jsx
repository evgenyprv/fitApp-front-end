import React from 'react'
import {Dropdown, Label} from 'semantic-ui-react'

import './style.css'

const TypeOfWorkout = ({handleTypeWorkoutChange, typeOptions}) => {

    return(
        <div className="panel-card">
            <Label size="large" className="panel-label">Type of Workout:</Label>
            <Dropdown clearable 
                options={typeOptions} 
                selection
                search
                onChange={handleTypeWorkoutChange}
            />
        </div>  
    )
}

export default TypeOfWorkout;