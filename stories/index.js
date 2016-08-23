import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Basic } from '../examples/index.jsx'
import DndSepcsExample from '../examples/dnd-specs.jsx'

storiesOf('Spec', module)
  .add('Sepcs Example', () => <DndSepcsExample/>)
