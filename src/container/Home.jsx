import React from 'react';
import { Container, Image} from 'semantic-ui-react'
import { connect } from 'react-redux'

import WorkoutPanel from '../component/workoutpanel/WorkoutPanel.jsx';


import './Home.css';
import 'semantic-ui-css/semantic.min.css';

class Home extends React.Component{
    
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

export default connect(null, null)(Home);