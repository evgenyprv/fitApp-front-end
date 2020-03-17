import React from 'react';
import { Container, Card} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import './Home.css';
import 'semantic-ui-css/semantic.min.css';

class Home extends React.Component{

    render(){
        return(
            <Container>
                <div className="Home">
                    <Card centered = 'true'
                        raised='true'>
                        <Card.Content>
                            <Link to = '/result'>
                                Get My Daily Workout    
                            </Link>
                        </Card.Content>
                    </Card>
                </div>
            </Container>
        )
    }
}

export default connect(null, null)(Home);