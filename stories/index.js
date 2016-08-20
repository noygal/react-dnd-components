import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Basic } from '../examples/index.jsx'

storiesOf('Spec', module)
  .add('basic', () => <Basic targets={[{},{}]} sources={[{targetId: 0}, {targetId: 1}]} />)
  .add('with no text', () => (
    <button></button>
  ))
