import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import SupermanMineTile from '../../components/SupermanMineTile'

test('renders content', () => {
  const component = render(
    <SupermanMineTile style={{}} handleClick={Function} />
  )

  expect(component.container.querySelector('i')).not.toBe(undefined)
})