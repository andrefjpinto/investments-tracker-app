import React from 'react'
import renderer from 'react-test-renderer'

import Card from '../Card'

describe('Card', () => {
  const style = { backgroundColor: 'black' }
  const children = <Card />

  it('renders correctly', () => {
    const tree = renderer.create(<Card style={style}>{children}</Card>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})