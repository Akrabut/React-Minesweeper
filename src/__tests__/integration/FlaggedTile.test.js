import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import FlaggedTile from '../../components/FlaggedTile'

test('renders content', () => {
  const component = render(
    <FlaggedTile style={{}} handleClick={Function} />
  )

  expect(component.container.querySelector('i')).not.toBe(undefined)
})