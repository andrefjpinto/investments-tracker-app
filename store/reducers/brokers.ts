import { LOAD_BROKERS, BrokerAction } from '../actions/brokers'

const initialState = {
  brokers: []
}

export default (state = initialState, action: BrokerAction) => {
  switch (action.type) {
    case LOAD_BROKERS:
      return {
        brokers: action.brokers
      }
  }
  return state
}
