import React from 'react';
import { Container, Image} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import WorkoutPanel from '../component/workoutpanel/WorkoutPanel.jsx';


import './Home.css';
import 'semantic-ui-css/semantic.min.css';

class Home extends React.Component{

    componentDidCatch(error, info){
        this.props.history.push('/404')
    }
    
    render(){
        return(
            <Container>
                <div className="Home">
                    <Image src="/logo.png" alt="logo"/>
                    <WorkoutPanel />
                </div>
            </Container>
        )
    }
}

export default withRouter(connect()(Home));