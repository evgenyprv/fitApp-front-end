import React from 'react';
import { Step } from 'semantic-ui-react';

import './HeaderProgress.css'

const HeaderProgress = ({handleLoadHeaders, headers}) =>{

    // handleLoadHeaders()

    return(<Step.Group items = {headers}/>)
}

export default HeaderProgress;