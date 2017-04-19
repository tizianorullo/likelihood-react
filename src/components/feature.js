import React, {Component} from 'react'
import {SortableElement, SortableHandle} from 'react-sortable-hoc'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {deleteFeature, updateFeature} from '../actions/feature'

const DragHandle = SortableHandle(() => <span className="button-small drag-handle">↕️</span>)

class Feature extends Component {
  render() {
    const {computed, feature, updateFeature, deleteFeature} = this.props
    return (
      <tr>
        <td><input value={feature.name} onChange={({target}) => updateFeature({...feature, name: target.value})} /></td>
        <td><input value={feature.best} onChange={({target}) => updateFeature({...feature, best: target.value})} /></td>
        <td><input value={feature.worst} onChange={({target}) => updateFeature({...feature, worst: target.value})} /></td>
        <td><input value={computed.likelihood + '%'} readOnly/></td>
        <td><button className="button-small" onClick={() => deleteFeature(feature)}>Delete</button></td>
        <td><DragHandle /></td>
      </tr>
    )
  }
}

const SortableFeature = SortableElement(props => <Feature {...props} />)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteFeature, updateFeature}, dispatch)
}

export default connect(null, mapDispatchToProps)(SortableFeature)
