# react-dnd-components

Simple react `Component` wrappers around [react-dnd](https://github.com/gaearon/react-dnd)
target, source and context components.

For better understanding the following terminology consult the react-dnd [docs](http://gaearon.github.io/react-dnd/docs-overview.html)

For examples see [examples folder](https://github.com/noygal/react-dnd-components/tree/master/examples).

## Context

This `Component` is a wrapper around react-dnd [context](http://gaearon.github.io/react-dnd/docs-drag-drop-context.html),
all other react-dnd components should reside inside a `Context` components.

#### Props

- `style` - propagate the style to the wrapper.
- `className` - propagate the className to the wrapper.

#### Usage
```
import { Context } from 'react-dnd-components'

...
  <Context style={{color: 'red'}} className="react-dnd-context">
    ... 
  <Context>
...
```

## Target

This `Component` is a wrapper around react-dnd [target](http://gaearon.github.io/react-dnd/docs-drop-target.html),
it should reside inside a `Context` component.

#### Props

- `style` - propagate the style to the wrapper.
- `className` - propagate the className to the wrapper.
- `types` - Required. The types supportedd components, it will only react to those.
- `specs` - Required. plain object implementing the react-dnd drop target [specification](http://gaearon.github.io/react-dnd/docs-drop-target.html).

#### Usage
```
import { Target } from 'react-dnd-components'

...
  <Target 
    style={{color: 'red'}}
    className="react-dnd-context"
    types={['card-type-a', 'card-type-b']}
    specs={{
      // Optional. Called when a compatible item is dropped on the target
      drop: (props, monitor, component) => ({id: props.dndId}),
      // Optional. Called when an item is hovered over the component.
      hover: (props, monitor, component) => changeStyleToHover(),
      // Optional. Use it to specify whether the drop target is able to accept the item.
      canDrop: (props, monitor) => true,
    }}>
    ... 
  <Target>
...
```

## Source

This `Component` is a wrapper around react-dnd [target](http://gaearon.github.io/react-dnd/docs-drag-source.html),
it should reside inside a `Context` component.

#### Props

- `style` - propagate the style to the wrapper.
- `className` - propagate the className to the wrapper.
- `type` - Required. The the component type.
- `specs` - Required. plain object implementing the react-dnd drop source spec [specification](http://gaearon.github.io/react-dnd/docs-drag-source.html).

#### Usage
```
import { Source } from 'react-dnd-components'

...
  <Source 
    style={{color: 'red'}}
    className="react-dnd-context"
    types={'card-type-a'}
    specs={{
      // Required. When the dragging starts, beginDrag is called. 
      // You must return a plain JavaScript object describing the data being dragged.
      beginDrag: (props, monitor, component) => ({id: props.dndId}),
      // Optional. When the dragging stops, endDrag is called. 
      // For every beginDrag call, a corresponding endDrag call is guaranteed. 
      endDrag: (props, monitor, component) => fireAction(),
      // Optional. Use it to specify whether the dragging is currently allowed.
      canDrag: (props, monitor) => true,
      // Optional. By default, only the drag source that initiated 
      // the drag operation is considered to be dragging. 
      isDragging: (props, monitor) => props.canDropFlag,
    }}>
    ... 
  <Source>
...
```