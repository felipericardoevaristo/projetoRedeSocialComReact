import {combineReducers} from 'redux';

import accountReducer from './accountReducer';

/*combina todos os reducers que temos na app*/
const rootReducer = combineReducers({
    account: accountReducer
})

export default rootReducer;