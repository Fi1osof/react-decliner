import React from 'react'
import Component from '../../src'

import { render } from '../tests/utils'

describe('Component', () => {
  it('Render default', () => {
    const tree = render(
      <>
        1<Component num={1} one="Рубль" two="Рубля" many="Рублей" />
        2<Component num={2} one="Рубль" two="Рубля" many="Рублей" />
        5<Component num={5} one="Рубль" two="Рубля" many="Рублей" />
        32
        <Component num={32} one="Рубль" two="Рубля" many="Рублей" />
      </>
    )
    expect(tree.container).toMatchSnapshot()
  })
})
