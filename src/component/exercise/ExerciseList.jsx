import React from 'react';
import { List } from 'semantic-ui-react';
import ExerciseItem from './ExerciseItem.jsx';

import './style.css'

const ExerciseList = ({data}) => {
    let listItems;

    if(data !== undefined){
        listItems = data.map((data, key) =>
            <ExerciseItem key={key} 
                bodyPart={data.body_part} 
                exerciseName={data.exercise_name}
                sets={data.sets}
                reps={data.reps}/>
        )
    }

    return(
        <List divided verticalAlign='middle' className='custom-list'>
            {listItems}
        </List> 
    )
}

export default ExerciseList;