import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import './style.css';

class SetButton extends React.Component{

    constructor(props){
        super(props)
        this.state={
            doneExercise: false,
            setsRemaining: this.props.sets,
            repetitions: this.props.reps
        }
    }

    handleClick = () => {

        if(this.state.doneExercise){
            this.setState(() => (
                {   
                    doneExercise: false,
                    setsRemaining: this.props.sets
                }
            ));
        }else{
            this.setState(({setsRemaining}) => (
                {   
                    doneExercise: setsRemaining === 1 ? true : false,
                    setsRemaining: setsRemaining - 1
                }
            ));
        }
    }

    render(){

        if(this.state.doneExercise){
            return(
                <Button 
                className="set-button disable-button button-margins"
                size="large" 
                compact
                onClick={this.handleClick}><Icon
                    className="tropy-icon"
                    name="trophy" 
                    size="big"/></Button>
            )
        }

        return(
            <div>
                <Button 
                    className="set-button button-margins"
                    size="large" 
                    compact
                    onClick={this.handleClick}>
                        {this.state.setsRemaining} X {this.state.repetitions}
                </Button>
            </div>
        )
    }
}

export default SetButton;