import React, { Component } from 'react'
import { Context, Target, Source } from '../'
import Freezer from 'freezer-js'

let Store = new Freezer({sources: [{id: '1'}, {id: '2'}]})

export default class DndSepcsExample extends Component {
  constructor(props) {
    super(props)
    // Source specs
    this.sourceSpecs = {
      beginDrag: props => ({id: props.dndId}),
      endDrag: (props, monitor) => {
        const target = monitor.getDropResult()
        if (!target) return
        const source = Store.get().sources.find(source => source.id === monitor.getItem().id)
        source.set({targetId: target.id})
      }
    }
    // Target specs
    this.targetSpecs = {
      drop: props => ({id: props.dndId})
    }
  }
  componentDidMount(){
      Store.on('update', () => this.setState({}));
  }

  _renderSources(targetId = null) {
    return Store.get().sources
      .filter(source => targetId === null ? !source.targetId : source.targetId === targetId)
      .map(source => <Source key={source.id} dndId={source.id} style={styles.source} type={'card'} specs={this.sourceSpecs}>S:{source.id}</Source>)
  }

  render() {
    return (
      <Context style={styles.context}>
        Context
        <Target dndId={1} style={styles.target} types={['card']} specs={this.targetSpecs}>
          Target 1
          {this._renderSources(1)}
        </Target>
        <Target dndId={2} style={styles.target} types={['card']} specs={this.targetSpecs}>
          Target 2
          {this._renderSources(2)}
        </Target>          
        {this._renderSources()}
      </Context>
    )
  }
}

const vars = {
  border: 'solid 0.1rem black'
}
const styles = {
  context: {
    padding: '1rem', 
    border: vars.border,
    borderRadius: '0.5rem', 
    backgroundColor: 'WhiteSmoke',
    fontFamily: 'sans-serif',
    fontWeight: 'lighter'
  },
  target: {
    minHeight: '4rem',
    padding: '0.5rem',
    margin: '0.5rem',
    display: 'flex-box',
    border: vars.border,
    borderRadius: '0.5rem',
    backgroundColor: 'Aquamarine'
  },
  source: {
    padding: '0.5rem',
    margin: '0.5rem',
    textAlign: 'center',
    width: '1.5rem',
    height: '1.5rem',
    border: vars.border,
    borderRadius: '50%',
    backgroundColor: 'Bisque'
  }
}
