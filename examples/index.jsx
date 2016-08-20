import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { Context, Target, Source } from '../'


export const Basic = props => {
  const {targets, sources} = props
  return (
    <Context style={styles.context}>
      <div>Context</div>
      {targets.map((target, i) => (
        <Target key={i} style={styles.target} types={['card']} specs={{}}>
          <div>Target {i}</div>
          {sources.map((source, j) => source.targetId !== i ? undefined : (
            <Source key={j} style={styles.source} type={'card'} specs={{beginDrag: () => ({id: j})}}>
              S:{j}
            </Source>
          ))}
        </Target>
      ))}
    </Context>
  )
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
