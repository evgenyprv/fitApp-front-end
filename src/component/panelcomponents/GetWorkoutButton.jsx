import React from 'react'
import { Button } from 'semantic-ui-react'

import './style.css'

const GetWorkoutButton = ({handleButtonClick}) => {
    return(
        <div>
            <Button className="generate-workout" 
                onClick={handleButtonClick}>
                    Get My Workout    
            </Button>
        </div>
    )
}

export default GetWorkoutButton;