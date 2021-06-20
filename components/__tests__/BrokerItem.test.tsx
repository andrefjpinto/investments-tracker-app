import React from 'react'
import renderer from 'react-test-renderer'

import BrokerItem from '../BrokerItem'

describe('BrokerItem', () => {
  const broker = { Name: 'Test Broker', URL: 'https://test.broker' }

  it('renders correctly', () => {
    const tree = renderer.create(<BrokerItem broker={broker} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})