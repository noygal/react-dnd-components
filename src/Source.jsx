import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import Wrapper from './Wrapper'

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

export default class Source {
  constructor (props) {
    super(props)
    this.Container = DragSource(props.types, props.spec, collect)(Target)
  }
  render () {
    const Container = this.Container
    const connectDragSource = this.props.connectDragSource
    return connectDragSource(<Container {...this.props} />)
  }
}
