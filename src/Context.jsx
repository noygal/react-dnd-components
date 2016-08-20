import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default class Context extends Component {
  constructor (props) {
    super(props)
    this.Container = DragDropContext(HTML5Backend)(Wrapper)
  }
  render () {
    const { children, style, className } = this.props
    const Container = this.Container
    return <Container className={className} style={style}>{children}</Container>
  }
}

class Wrapper extends Component {
  render () {
    const { children, style, className } = this.props
    return <div className={className} style={style}>{children}</div>
  }
}