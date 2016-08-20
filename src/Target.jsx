import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import Wrapper from './Wrapper'

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  }
}

export default class Target {
  constructor (props) {
    super(props)
    this.Container = DropTarget(props.types, props.spec, collect)(Target)
  }
  render () {
    const Container = this.Container
    const connectDropTarget = this.props.connectDropTarget
    return connectDropTarget(<Container {...this.props} />)
  }
}
