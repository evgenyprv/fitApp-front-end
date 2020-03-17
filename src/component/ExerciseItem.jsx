import React from 'react';
import { List } from 'semantic-ui-react';

import './style.css'

const ExerciseItem = ({data}) => {
    return(
        <List.Item >
            <List.Header className='list-item-cell'>{Object.keys(data)[0]}</List.Header>
            <List.Content className='list-item-cell'>{Object.values(data)[0]}</List.Content>
        </List.Item>
    )
}

export default ExerciseItem;