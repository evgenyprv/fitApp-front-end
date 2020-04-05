import React from 'react'
import {Dropdown, Label} from 'semantic-ui-react'

import './style.css'

const TypeOfWorkout = (props) => {

    const {workTypeError,handleTypeWorkoutChange, typeOptions} = props

    return(
        <div className="panel-card">
            <Label size="large" className="panel-label">Type of Workout:</Label>
            <Dropdown clearable 
                options={typeOptions} 
                selection
                search
                error={workTypeError}
                onChange={handleTypeWorkoutChange}/>
        </div>  
    )
}

export default TypeOfWorkout;