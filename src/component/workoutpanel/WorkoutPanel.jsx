import React from 'react';
import { Container, Card} from 'semantic-ui-react'
import { connect } from 'react-redux';

import {addWorkoutLoc, addTypeWorkout, addCardio, addCore} from '../../action/form_action';
import {fetchTypeWorkout} from '../../action/panel_action';
import {clearData} from '../../action/search_workout';

import GymWorkoutPanel from '../gympanel/GymWorkoutPanel.jsx'
import HomeWorkoutPanel from '../homepanel/HomeWorkoutPanel.jsx'
import GetWorkoutButton from '../panelcomponents/GetWorkoutButton.jsx';
import WorkoutLocationPanel from '../panelcomponents/WorkoutLocationPanel.jsx';

import './WorkoutPanel.css'

class WorkoutPanel extends React.Component {

    componentDidMount(){
        this.props.fetchTypeOfWorkout()
        this.props.clearWorkoutData()
    }

    handleWorkoutLocChange = (e, { value }) => this.props.addWorkoutType(value)
    handleTypeWorkoutChange = (e, {value}) => this.props.addTypeOfWorkout(value)
    handleCardioChange = (e, {checked}) =>  this.props.addCardioWorkout(checked)
    handleCoreChange = (e, {checked}) => this.props.addCoreWorkout(checked)
 
    render(){
        
        let panel;
        const {typeOfWorkoutList, workoutLocation} = this.props

        if(workoutLocation === 'gym'){
            panel = <GymWorkoutPanel 
                        typeOfWorkoutList={typeOfWorkoutList.gym}
                        handleTypeWorkoutChange={this.handleTypeWorkoutChange}
                        handleCardioChange={this.handleCardioChange}
                        handleCoreChange = {this.handleCoreChange}/> 
        }else if(workoutLocation === 'home'){
            panel = <HomeWorkoutPanel 
                        typeOfWorkoutList={typeOfWorkoutList.home}
                        handleTypeWorkoutChange={this.handleTypeWorkoutChange}/>
        }
        
        return(
            <Container>
                <Card raised centered className="panel-container-card">
                    <WorkoutLocationPanel 
                        workoutLoc = {workoutLocation}
                        handleWorkoutLocChange = {this.handleWorkoutLocChange}/>
                    {panel}
                    <GetWorkoutButton />
                </Card>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchTypeOfWorkout: (location) => {dispatch(fetchTypeWorkout(location))},
        addWorkoutType: (data) => {dispatch(addWorkoutLoc(data))},
        addTypeOfWorkout: (data) => {dispatch(addTypeWorkout(data))},
        addCardioWorkout: (data) => {dispatch(addCardio(data))},
        addCoreWorkout: (data) => {dispatch(addCore(data))},
        clearWorkoutData: () => {dispatch(clearData())},
    }
}

const mapStateToProps = (state) => {
    return { 
        workoutLocation: state.panel_form_reducer.workoutLocation,
        typeOfWorkoutList: state.panel_reducer.payload.workout_type,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPanel);