import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Basic } from '../examples/index.jsx'
import DndSepcsExample from '../examples/dnd-specs.jsx'

storiesOf('Spec', module)
  // .add('basic', () => <Basic 
  //   targets={[{
  //     id: 1, 
  //     types: ['cards'],
  //   }, {
  //     id: 2,
  //     types: ['cards']
  //   }]}
  //   sources={[{
  //     id: 1,
  //     targetId: 2,
  //     type: 'card',
  //     specs: {
  //       beginDrag: () => ({id: 1})
  //     }
  //   },{
  //     id: 2,
  //     targetId: 1,
  //     type: 'card',
  //     specs: {
  //       beginDrag: () => ({id: 2})
  //     }
  //   }]}
  //     />)
  .add('Sepcs Example', () => <DndSepcsExample/>)
