import React, { Component } from 'react-dnd'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Wrapper from './Wrapper'

export default class Context extends Component {
  constructor (props) {
    super(props)
    this.Container = DragDropContext(HTML5Backend)(Wrapper)
  }
  render () {
    const Container = this.Container
    return <Container {...this.props} />
  }
}
