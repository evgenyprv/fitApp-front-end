import React from 'react';
import { Container, Card, List, Label } from 'semantic-ui-react';
import { connect } from 'react-redux'
import {fetchWorkout} from '../action/search_workout';

import './Result.css';
import ExerciseList from '../component/ExerciseList.jsx';

class Result extends React.Component{

    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.fetchWorkoutData();
    }

    render(){
        const { body, core } = this.props

        return(
            <Container className="container-extra">
                <Card centered="true"
                    raised="true">
                    <Label as='a' color='red' ribbon>Cardio</Label>
                    <Label as='a' color='orange' ribbon>Body</Label>
                    <ExerciseList data = {body} />
                    <Label as='a' color='olive' ribbon>Core</Label>
                    <ExerciseList data = {core} />
                </Card>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchWorkoutData: () => {dispatch(fetchWorkout())}
    }
  }

const mapStateToProps = (state) => {
    return { 
        body: state.workout_reducer.payload.BodyExercises, 
        core: state.workout_reducer.payload.CoreExercises,
        error: state.workout_reducer.error
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Result);