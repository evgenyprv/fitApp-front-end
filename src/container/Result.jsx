import React from 'react';
import { Container, Card, Dimmer, Loader, Step } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchWorkout } from '../action/search_workout';
import { loadHeaders, 
    changePage,
    resetPage,
    changeHeaderToCompleted,
    changeHeaderToActive, 
    changeHeaderToDisabled } from '../action/page_nav_action';

import './Result.css';
import ExerciseList from '../component/exercise/ExerciseList.jsx';
import FooterPagination from '../component/misc/FooterPagination.jsx'

class Result extends React.Component{

    componentDidMount(){
        if(this.props.location.fetchRandWorkout){
            this.props.fetchWorkoutData(this.props.workoutType, this.props.workoutLoc, 
                this.props.cardio, this.props.core)
                .then(() => {this.props.loadExistingHeaders(this.props.labels)})
        }
    }

    componentWillUnmount(){
        this.props.resetPage()
    }

    handlePageNext = (currentPage) => {
        let {headers} = this.props

        this.props.changeToPage({currentPage: currentPage, direction: 'next'})
        .then(() => this.props.changeHeaderToCompleted(this.retrieveKeyValue(headers[this.props.currentPage-1])))
        .then(() => this.props.changeHeaderToActive(this.retrieveKeyValue(headers[this.props.currentPage])));
    }

    handlePageBack = (currentPage) => {
        let {headers} = this.props

        this.props.changeToPage({currentPage: currentPage, direction: 'back'})
        .then(() => this.props.changeHeaderToDisabled(this.retrieveKeyValue(headers[this.props.currentPage+1])))
        .then(() => this.props.changeHeaderToActive(this.retrieveKeyValue(headers[this.props.currentPage])))
    }

    retrieveKeyValue = (obj) => Object.getOwnPropertyDescriptor(obj, 'key').value


    render(){

        const { payload, currentPage, isFetching, headers} = this.props

        if(isFetching){
            return(
                <div> 
                    <Dimmer active inverted>
                        <Loader inverted content='Loading'/>
                    </Dimmer>
                </div>
            )
        }

        return(
            <Container className="container-extra">
                <Card centered raised className="container-card">
                    <Step.Group items = {headers}/>
                    <ExerciseList data = {payload}
                        currentPage={currentPage}/>
                    <FooterPagination 
                        numPages={payload.length-1}
                        currentPage={currentPage}
                        handlePageBack={this.handlePageBack}
                        handlePageNext={this.handlePageNext}/>
                </Card>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWorkoutData: async (type, location, cardio, core) => {
            return await dispatch(fetchWorkout(type, location, cardio, core)) 
        },
        loadExistingHeaders: (name) => {dispatch(loadHeaders(name))},
        changeToPage: async (data) => {await dispatch(changePage(data))},
        resetPage: () => {dispatch(resetPage())},
        changeHeaderToCompleted: (data) => {dispatch(changeHeaderToCompleted(data))},
        changeHeaderToActive: (data) => {dispatch(changeHeaderToActive(data))},
        changeHeaderToDisabled: (data) => {dispatch(changeHeaderToDisabled(data))},
    }
  }

const mapStateToProps = (state) => {
    return { 
        isFetching: state.workout_reducer.isFetching,
        payload: transformPayload(state.workout_reducer.payload.exercises),
        labels: retrieveLables(state.workout_reducer.payload.exercises),
        headers: retrieveHeaders(state.header_nav_reducer),
        currentPage: state.page_nav_reducer.currentPage,
        error: state.workout_reducer.error,
        workoutType: state.panel_form_reducer.typeOfWorkout,
        workoutLoc: state.panel_form_reducer.workoutLocation,
        cardio: state.panel_form_reducer.included.cardio,
        core: state.panel_form_reducer.included.core,
    }
}

const transformPayload = (payload) => {
    return payload !== undefined ? Object.entries(payload) : payload
}

const retrieveLables = (payload) => {
    return payload !== undefined ? Object.keys(payload) : payload
}

const retrieveHeaders = (payload) => {
    return payload !== undefined ? 
        Object.values(payload).filter(header => Object.keys(header).length > 0) : payload
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result));