import React from 'react'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'

import Feature from './feature'

const FeatureList = SortableContainer(props => {
  const features = props.ids.map((id, index) => {
    const feature = props.features[id]
    return <Feature
      index={index}
      key={id}
      id={id}
      feature={feature}
      onNameChange={props.onNameChange}
      onBestChange={props.onBestChange}
      onWorstChange={props.onWorstChange}
      onFeatureUp={props.onFeatureUp}
      onFeatureDown={props.onFeatureDown}
      onDeleteFeature={props.onDeleteFeature}
      onSortEnd={props.onSortEnd}
    />
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Best case</th>
            <th>Worst case</th>
            <th>Likelihood</th>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          {features}
        </tbody>
      </table>
      <button
        onClick={props.onAddFeature}
      >Add</button>
    </div>
  )
})

export default FeatureList
