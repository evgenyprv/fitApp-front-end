import React from 'react';
import { List } from 'semantic-ui-react';
import ExerciseItem from './ExerciseItem.jsx';

import './style.css'

const ExerciseList = ({data}) => {
    let listItems;

    if(data !== undefined){
        listItems = data.map((data, key) => <ExerciseItem key={key} data={data} />)
    }

    return(
        <List verticalAlign='middle' divided className='custom-list'>
            {listItems}
        </List> 
    )
}

export default ExerciseList;