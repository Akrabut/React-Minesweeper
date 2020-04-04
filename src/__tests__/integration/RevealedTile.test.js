import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import RevealedTile from '../../components/RevealedTile'

test('renders content', () => {
  const component = render(
    <RevealedTile style={{}} value={1} />
  )

  expect(component.container).toHaveTextContent(1)
})