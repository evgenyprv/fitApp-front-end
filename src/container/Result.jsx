import React from 'react';
import { Container, Card, List, Label } from 'semantic-ui-react';
import { connect } from 'react-redux'
import './Result.css';

class Result extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const { payload } = this.props

        return(
            <Container className="container-extra">
                <Card centered="true"
                    raised="true">
                    <Label as='a' color='red' ribbon>Cardio</Label>
                    <List >
                        {/* payload.map((info, key) => 
                        <List.Item key={key}>
                            <List.Content>
                                Item1
                            </List.Content>
                        </List.Item>) */}
                    </List>
                    <Label as='a' color='orange' ribbon>Body</Label>
                    <List>
                        {/* payload.map((info, key) => 
                        <List.Item key={key}>
                            <List.Content>
                                Item1
                            </List.Content>
                        </List.Item>) */}
                    </List> 
                    <Label as='a' color='teal' ribbon>Core</Label>
                    <List>
                        {/* payload.map((info, key) => 
                        <List.Item key={key}>
                            <List.Content>
                                Item1
                            </List.Content>
                        </List.Item>) */}
                    </List>
                </Card>
            </Container>
        )
    }
}

export default connect()(Result);