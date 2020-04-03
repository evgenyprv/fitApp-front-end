import React from 'react';
import { Button } from 'semantic-ui-react';

import './style.css';

class SetButton extends React.Component{

    state={
        doneExercise: false,
        setsRemaining: this.props.sets,
        repetitions: this.props.reps
    }

    handleClick = () => {
        this.setState(({setsRemaining}) => (
            {   
                doneExercise: setsRemaining === 1 ? true : false,
                setsRemaining: setsRemaining - 1
            }
        ));
    }

    render(){
        return(
            <div>
                {this.state.doneExercise ? 
                <Button 
                    color="red"
                    className="button disable-button button-margins"
                    size="large" 
                    compact
                    disabled
                    icon="trophy"/>:
                <Button 
                    className="button button-margins"
                    size="large" 
                    compact
                    onClick={this.handleClick}>
                        {this.state.setsRemaining} X {this.state.repetitions}
                </Button>}
            </div>
        )
    }
}

export default SetButton;