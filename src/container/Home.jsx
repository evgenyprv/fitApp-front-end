import React from 'react';
import { Container, Button, Card} from 'semantic-ui-react'
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
                            <Link to = '/result' >
                                <Button type='submit' 
                                style={{height: '100px', width: '200px'}}>
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

export default connect(null, null)(Home);