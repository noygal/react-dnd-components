import React, { Component } from 'react'
import { Context, Target, Source } from '../'

export default class DndSepcsExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sources: [{id: '1'}, {id: '2'}]
    }
    this.sourceSpecs = {
      beginDrag: props => ({id: props.dndId}),
      endDrag: (props, monitor) => this.setState(
        {
          sources: this.state.sources.map(source => source.id !== monitor.getItem().id ? source
              : !monitor.getDropResult() ? source : Object.assign({}, source, {targetId: monitor.getDropResult().id}))
        })
    }
    this.targetSpecs = {
      drop: props => ({id: props.dndId})
    }
  }

  _renderSources(targetId = null) {
    console.log(this.state.sources)
    return this.state.sources
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
        <div style={styles.target}>
          Not Target
          {this._renderSources()}
        </div>
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
