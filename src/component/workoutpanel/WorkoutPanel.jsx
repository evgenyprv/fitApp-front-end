import React from 'react';
import { Container, Card, Message} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import {addWorkoutLoc, 
        addTypeWorkout, 
        addCardio, 
        addCore} from '../../action/form_action';
import {fetchTypeWorkout} from '../../action/panel_action';
import {clearData} from '../../action/misc_action';
import {NO_LOCATION_MESSAGE, NO_TYPE_MESSAGE} from '../../util/errorMessages'

import GymWorkoutPanel from '../gympanel/GymWorkoutPanel.jsx'
import HomeWorkoutPanel from '../homepanel/HomeWorkoutPanel.jsx'
import GetWorkoutButton from '../panelcomponents/GetWorkoutButton.jsx';
import WorkoutLocationPanel from '../panelcomponents/WorkoutLocationPanel.jsx';

import './WorkoutPanel.css'

class WorkoutPanel extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            formError: false,
            workLocError:false,
            workTypeError:false,
            errorMessage: '',
        }
    }

    componentDidMount(){
        this.props.fetchTypeOfWorkout()
        this.props.clearWorkoutData()
    }

    handleButtonClick = () => {
        const {workoutLocation,typeOfWorkout} = this.props

        this.handleFormValidation(workoutLocation, typeOfWorkout)
        .then((error) => {
            if(!error){
                const location = {
                    pathname: '/result',
                    fetchRandWorkout: true
                }
                this.props.history.push(location)
            }   
        })
    }

    handleFormValidation = async (location, type) => {
        let error = false
        let message = []

        if(location === ""){
            this.setState({workLocError: true})
            error = true
            message.push(NO_LOCATION_MESSAGE)
        }else{
            this.setState({workLocError: false})
        }

        if(type === ""){
            this.setState({workTypeError: true})
            error = true
            message.push(NO_TYPE_MESSAGE)
        }else{
            this.setState({workTypeError: false})
        }

        if(error){
            this.setState({formError: true})
        }else{
            this.setState({formError: false})
        }

        this.setState({errorMessage: message.shift()})

        return error
    }

    handleWorkoutLocChange = (e, { value }) => {
        this.props.addWorkoutType(value)
        this.handleFormValidation()
    }

    handleTypeWorkoutChange = (e, {value}) => {
        this.props.addTypeOfWorkout(value)
        this.handleFormValidation()
    }
    handleCardioChange = (e, {checked}) =>  this.props.addCardioWorkout(checked)
    handleCoreChange = (e, {checked}) => this.props.addCoreWorkout(checked)
    
    render(){
        
        let panel;
        let message;
        const {typeOfWorkoutList, workoutLocation} = this.props

        if(workoutLocation === 'gym'){
            panel = <GymWorkoutPanel 
                        workTypeError = {this.state.workTypeError}
                        typeOfWorkoutList={typeOfWorkoutList.gym}
                        handleTypeWorkoutChange={this.handleTypeWorkoutChange}
                        handleCardioChange={this.handleCardioChange}
                        handleCoreChange = {this.handleCoreChange}/> 
        }else if(workoutLocation === 'home'){
            panel = <HomeWorkoutPanel 
                        workTypeError = {this.state.workTypeError}
                        typeOfWorkoutList={typeOfWorkoutList.home}
                        handleTypeWorkoutChange={this.handleTypeWorkoutChange}/>
        }

        if(this.state.formError){
            message = <Message
                        size='medium'
                        error
                        content={this.state.errorMessage}/>
        }
        
        return(
            <Container>
                <Card raised centered className="panel-container-card">
                    <WorkoutLocationPanel 
                        workoutLoc = {workoutLocation}
                        handleWorkoutLocChange = {this.handleWorkoutLocChange}/>
                    {panel}
                    {message}
                    <GetWorkoutButton 
                        handleButtonClick={this.handleButtonClick}/>
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
        typeOfWorkout: state.panel_form_reducer.typeOfWorkout,
        typeOfWorkoutList: state.panel_reducer.payload.workout_type,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkoutPanel));