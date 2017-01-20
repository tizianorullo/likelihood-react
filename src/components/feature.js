import React from 'react'
import {SortableElement, SortableHandle} from 'react-sortable-hoc'

const Feature = SortableElement((props) => {
  return <Item
    {...props}
    useDragHandle={true}
  />
})

const DragHandle = SortableHandle(() => <span className="button-small drag-handle">↕️↕️</span>)

class Item extends React.Component {
  render() {
    const feature = this.props.feature
    const id = this.props.id
    return (
      <tr>
        <td><input
          value={feature.name}
          onChange={event => this.props.onNameChange(id, event.target.value)}
        /></td>
        <td><input
          value={feature.best}
          onChange={event => this.props.onBestChange(id, event.target.value)}
        /></td>
        <td><input
          value={feature.worst}
          onChange={event => this.props.onWorstChange(id, event.target.value)}
        /></td>
        <td><input
          value={feature.likelihood}
          readOnly
        /></td>
        {/* <td><button className="button-small"
          onClick={event => this.props.onFeatureUp(id)}
        >Up</button></td>
        <td><button className="button-small"
          onClick={event => this.props.onFeatureDown(id)}
        >Down</button></td> */}
        <td><button className="button-small"
          onClick={event => this.props.onDeleteFeature(id)}
        >Delete</button></td>
        <td><DragHandle /></td>
      </tr>
    )
  }
}

export default Feature
