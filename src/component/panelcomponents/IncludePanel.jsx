import React from 'react'
import {Checkbox, Label} from 'semantic-ui-react'

const IncludePanel = ({handleCardioChange, handleCoreChange}) => {

    return(
        <div className="panel-card">
            <Label size="large" className="panel-label">Include:</Label>
            <Checkbox label="Cardio" onChange={handleCardioChange}/>
            <Checkbox label="Core" onChange={handleCoreChange}/>
        </div>
    )
}

export default IncludePanel;