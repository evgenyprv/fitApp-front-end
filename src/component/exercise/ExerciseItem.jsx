import React from 'react';
import { List, Image } from 'semantic-ui-react';
import SetButton from './SetButton.jsx';

import './style.css'

const ExerciseItem = (props) => {

    return(
        <List.Item className="list-item">
            <div>
                <Image size='tiny' verticalAlign='middle'/>
            </div>
            <div className="exercise-item-names">
                <List.Header className='list-item-cell'>{props.bodyPart}</List.Header>
                <List.Content className='list-item-cell'>{props.exerciseName}</List.Content>
            </div>
            <div>
                <SetButton sets={props.sets} reps={props.reps}/>
            </div>
        </List.Item>
    )
}

export default ExerciseItem;