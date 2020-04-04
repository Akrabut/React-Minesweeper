import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import HiddenTile from '../../components/FlaggedTile'

test('renders content', () => {
  const component = render(
    <HiddenTile style={{}} handleClick={Function} />
  )

  expect(component.container.querySelector('a')).not.toBe(undefined)
})