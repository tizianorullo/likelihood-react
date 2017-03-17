import React, {Component} from 'react'
import {SortableContainer} from 'react-sortable-hoc'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Feature from './feature'
import {addFeature, sortFeature, fetchFeatures} from '../actions/feature'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = this.calculateLikelihood(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.calculateLikelihood(nextProps))
  }

  calculateLikelihood(props) {
    const state = {}

    let totalbest = 0
    let totalworst = 0

    props.features.map(feature => {
      totalbest = totalbest + (feature.best * props.rate)
      totalworst = totalworst + (feature.worst * props.rate)

      const diff = totalworst - totalbest
      const bestleft = props.budget - totalbest
      const likelihood = 100/(diff/bestleft)

      state[feature.id] = {
        totalbest,
        totalworst,
        diff,
        bestleft,
        likelihood: (likelihood < 0 ? 0 : Math.min(likelihood, 100))
      }
    })

    return state
  }

  nextId() {
    return Math.max(...this.props.features.map(feature => feature.id)) + 1
  }

  componentDidMount() {
    // this.props.fetchFeatures()
  }

  renderFeatures() {
    return this.props.features.map((feature, index) => {
      return <Feature
        key={feature.id}
        index={index}
        feature={feature}
        computed={this.state[feature.id]}
      />
    })
  }

  render() {
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
            {this.renderFeatures()}
          </tbody>
        </table>
        <button
          onClick={event => this.props.addFeature(this.nextId())}
        >Add</button>
      </div>
    )
  }
}

const SortableFeatureList = SortableContainer(props => <List {...props} />)

function FeatureList(props) {
  return (
    <SortableFeatureList
      {...props}
      onSortEnd={({oldIndex, newIndex}) => props.sortFeature(oldIndex, newIndex)}
      useDragHandle={true}
      lockAxis='y'
      transitionDuration={0}
      helperClass="drag-helper"
    />
  )
}

function mapStateToProps({budget, rate, features}) {
  return {budget, rate, features}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addFeature, sortFeature, fetchFeatures}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureList)
