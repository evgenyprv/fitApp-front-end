import React from 'react'
import {Form} from 'semantic-ui-react'

import './style.css'

const WorkoutLocationPanel = (props) => {

    const {workoutLoc, handleWorkoutLocChange} = props

    return(
        <div className="panel-card location-row-width">
            <Form.Radio 
                label="Home" 
                value='home'
                error
                checked={workoutLoc === 'home'}
                onChange={handleWorkoutLocChange}/>
            <Form.Radio label="Gym" 
                value='gym'
                checked={workoutLoc === 'gym'}
                onChange={handleWorkoutLocChange}/>
        </div>
    )
}

export default WorkoutLocationPanel;