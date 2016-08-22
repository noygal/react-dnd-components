import React, { Component, PropTypes } from 'react'
import { DropTarget } from 'react-dnd'

export default class Target extends Component {
  constructor (props) {
    super(props)
    const { types, specs = {}} = props
    this.Container = DropTarget(types, specs, collect)(Wrapper)
  }
  render () {
    const { children, dndId, style, className } = this.props
    const Container = this.Container
    return <Container dndId={dndId} className={className} style={style}>{children}</Container>
  }
}

Target.propTypes = {
  dndId: PropTypes.any.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  specs: PropTypes.object
}

class Wrapper extends Component {
  render () {
    const { children, style, className, connectDropTarget, isOver, isOverCurrent, canDrop, itemType} = this.props
    const dndProps = {isOver, isOverCurrent, canDrop, itemType}
    const childrenWithProps = React.Children.map(children, child => (!child || !child.type || typeof child.type === 'string') ? child :
      <child.type {...child.props} {...dndProps} />)
    return connectDropTarget(
      <div className={className} style={style}>
        {childrenWithProps}
      </div>)
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  }
}
