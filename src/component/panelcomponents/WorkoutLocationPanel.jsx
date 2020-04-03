import React from 'react'
import {Radio} from 'semantic-ui-react'

const WorkoutLocationPanel = ({workoutLoc, handleWorkoutLocChange}) => {
    return(
        <div className="panel-card">
            <Radio label="Home" 
                value='home'
                checked={workoutLoc === 'home'}
                onChange={handleWorkoutLocChange}/>
            <Radio label="Gym" 
                value='gym'
                checked={workoutLoc === 'gym'}
                onChange={handleWorkoutLocChange}/>
        </div>
    )
}

export default WorkoutLocationPanel;