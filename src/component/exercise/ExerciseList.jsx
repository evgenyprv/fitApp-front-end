import React from 'react';
import { List } from 'semantic-ui-react';
import ExerciseItem from './ExerciseItem.jsx';

import './style.css'

class ExerciseList extends React.Component{

    handleSetClick = (exerciseName, exerciseDone) => {}

    render(){
        let listItems;

        const {data,currentPage} = this.props

        if(data !== undefined){
            listItems = data[currentPage][1].map((data) =>
                <ExerciseItem 
                    key={data['exercise_name']} 
                    bodyPart={data.body_part} 
                    exerciseName={data.exercise_name}
                    sets={data.sets}
                    reps={data.reps}
                    handleSetClick={this.handleSetClick}/> 
            )
        }

        return(
            <List verticalAlign='middle' className='custom-list'>
                {listItems}
            </List> 
        )
    }
}

export default ExerciseList;