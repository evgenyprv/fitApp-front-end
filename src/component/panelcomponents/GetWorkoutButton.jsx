import React from 'react'
import { Card} from 'semantic-ui-react'
import { Link } from "react-router-dom";

const GetWorkoutButton = () => {
    return(
        <div>
            <Link 
                to = {{
                    pathname: '/result',
                    fetchRandWorkout: true
                }}>
                <Card.Content className="generate-button">
                        Get My Workout    
                </Card.Content>
            </Link>
        </div>
    )
}

export default GetWorkoutButton;