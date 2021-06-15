import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import brokersReducer from './reducers/brokers'

const rootReducer = combineReducers({
  brokers: brokersReducer
})

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export type RootState = ReturnType<typeof store.getState>
