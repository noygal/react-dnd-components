import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'

export default class Source extends Component {
  constructor (props) {
    super(props)
    const { type, specs = {}} = props
    this.Container = DragSource(type, specs, collect)(Wrapper)
  }
  render () {
    const { children, dndId, style, className } = this.props
    const Container = this.Container
    return <Container dndId={dndId} className={className} style={style}>{children}</Container>
  }
}

Source.propTypes = {
  dndId: PropTypes.any.isRequired
}

class Wrapper extends Component {
  render () {
    const { children, style, className, connectDragSource, isDragging } = this.props
    const dndProps = { isDragging }
    const childrenWithProps = React.Children.map(children, child => !child.type ? child :
      <child.type {...child.props} {...dndProps} />)
    return connectDragSource(
      <div className={className} style={style}>
        {childrenWithProps}
      </div>)
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}
