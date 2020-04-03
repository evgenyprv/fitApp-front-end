import React from 'react';
import {connect} from 'react-redux';
import { Container,Button, Icon} from 'semantic-ui-react';

import './FooterPagination.css'

class FooterPagination extends React.Component{

    render(){

        const {numPages, currentPage, handlePageBack, handlePageNext} = this.props
        return(
            <Container className="footer-container group">
                {currentPage === numPages &&
                <Button className="finish-workout-button">Finish Workout</Button>}
                <Container className="footer-container nav">
                    {currentPage === 0 ? 
                    <Button className="pagination-button"
                        disabled>
                        <Icon size="large" name="chevron left"/>
                    </Button> :
                    <Button className="pagination-button"
                        onClick={() => handlePageBack(currentPage - 1)}>
                        <Icon size="large" name="chevron left"/>
                    </Button>}
                    {currentPage === numPages ? 
                    <Button className="pagination-button"
                        disabled>
                        <Icon size="large" name="chevron right"/>
                    </Button>:
                    <Button className="pagination-button"
                        onClick={() => handlePageNext(currentPage + 1)}>
                        <Icon size="large" name="chevron right"/>
                    </Button>}
                </Container>
            </Container>
        )
    }
}

export default connect()(FooterPagination);