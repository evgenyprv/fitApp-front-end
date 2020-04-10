import React from 'react';
import { Step } from 'semantic-ui-react';

import './HeaderProgress.css'

const HeaderProgress = ({headers}) =>{

    return(<Step.Group items = {headers}/>)
}

export default HeaderProgress;