import React from 'react';
import { Container, Button, Card, Dropdown} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {fetchWorkout} from '../action/search_workout';

import './Home.css';
import 'semantic-ui-css/semantic.min.css';

// const workoutOptions =[
//     {
//         key:'Intense',
//         text: 'Intense',
//         value: 'Intense'
//     },
//     {
//         key: 'Lower Rep/High weight',
//         text: 'Lower Rep/High weight',
//         value: 'Lower Rep/High weight'
//     }
    
// ]

class Home extends React.Component{

    constructor(props){
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        this.props.onRandomizerClick();
    }

    render(){
        return(
            <Container>
                <div className="Home">
                    <Card centered="true"
                        raised="true">
                        {/* <Dropdown
                            placeholder='Select Type of Workout'
                            fluid
                            selection
                            options={workoutOptions}/> */}
                        <Card.Content>
                            <Link to = '/result' >
                                <Button type='submit' 
                                style={{height: '100px', width: '200px'}}
                                onClick = {this.handleOnClick}>
                                    Get My Daily Workout
                                </Button>
                            </Link>
                        </Card.Content>
                    </Card>
                </div>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onRandomizerClick: () => {dispatch(fetchWorkout())}
    }
  }

export default connect(null, mapDispatchToProps)(Home);