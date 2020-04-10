import React from 'react';
import { List, Image } from 'semantic-ui-react';
import SetButton from './SetButton.jsx';

import './style.css'

const ExerciseItem = (props) => {

    const {bodyPart,exerciseName,sets,reps,handleSetClick} = props

    return(
        <List.Item className="list-item">
            <div>
                <Image size='tiny' verticalAlign='middle'/>
            </div>
            <div className="exercise-item-names">
                <List.Header className='list-item-cell'>{bodyPart}</List.Header>
                <List.Content className='list-item-cell'>{exerciseName}</List.Content>
            </div>
            <div>
                <SetButton
                    exerciseName={exerciseName} 
                    sets={sets} 
                    reps={reps}
                    handleSetClick={handleSetClick}/>
            </div>
        </List.Item>
    )
}

export default ExerciseItem;