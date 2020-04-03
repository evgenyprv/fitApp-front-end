import { combineReducers } from 'redux'
import workout_reducer from './workout_reducer'
import panel_form_reducer from './panel_form_reducer'
import panel_reducer from './panel_reducer'
import page_nav_reducer from './page_nav_reducer'
import header_nav_reducer from './header_nav_reducer'

export default combineReducers({
    workout_reducer,
    panel_form_reducer,
    panel_reducer,
    page_nav_reducer,
    header_nav_reducer,
})