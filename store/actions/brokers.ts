import Broker from '../../models/broker'

export type BrokerAction = { type: any; brokers: any }
type BrokerDispatch = (arg0: { type: any; brokers: any }) => void

export const LOAD_BROKERS = 'LOAD_BROKERS'

export const loadBrokers = () => {
  return async (dispatch: BrokerDispatch) => {
    try {
      const response = await fetch(
        'https://7g18eahrc2.execute-api.eu-west-1.amazonaws.com/dev/brokers'
      )

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const resData = await response.json()
      console.log(resData)

      const loadedBrokers: Broker[] = resData

      dispatch({ type: LOAD_BROKERS, brokers: loadedBrokers })
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
