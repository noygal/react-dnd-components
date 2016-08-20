import React, { Component } from 'react-dnd'
import { DragDropContext } from 'react-dnd'

class Wrapper extends Component {
  render () {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, this.props)
    )
    return (
      <div>
        {childrenWithProps}
      </div>)
  }
}