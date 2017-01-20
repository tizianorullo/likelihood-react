import React from 'react'
import ReactDOM from 'react-dom'
import {arrayMove} from 'react-sortable-hoc'

import Budget from './components/budget'
import Rate from './components/rate'
import FeatureList from './components/feature-list'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      budget: 10,
      rate: 1,
      ids: [1,2,3,4,5,6],
      features: {
        1: { name: 'My Feature 1', best: 2, worst: 3, likelihood: 0},
        2: { name: 'My Feature 2', best: 2, worst: 3, likelihood: 0},
        3: { name: 'My Feature 3', best: 2, worst: 3, likelihood: 0},
        4: { name: 'My Feature 4', best: 2, worst: 3, likelihood: 0},
        5: { name: 'My Feature 5', best: 2, worst: 3, likelihood: 0},
        6: { name: 'My Feature 6', best: 2, worst: 3, likelihood: 0}
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="meta clearfix">
          <Budget
            budget={this.state.budget}
            onBudgetChange={(budget) => this.updateBudget(budget)}
          />
          <Rate
            rate={this.state.rate}
            onRateChange={(rate) => this.updateRate(rate)}
          />
        </div>
        <FeatureList
          ids={this.state.ids}
          features={this.state.features}
          onNameChange={(id,name) => this.updateFeatureProp(id, 'name', name)}
          onBestChange={(id,value) => this.updateFeatureProp(id, 'best', value)}
          onWorstChange={(id,value) => this.updateFeatureProp(id, 'worst', value)}
          onFeatureUp={id => this.moveFeature(id, 'up')}
          onFeatureDown={id => this.moveFeature(id, 'down')}
          onDeleteFeature={(id) => this.deleteFeature(id)}
          onAddFeature={() => this.addFeature()}
          onSortEnd={(event) => this.draggedFeature(event)}
          useDragHandle={true}
          lockAxis='y'
          transitionDuration={0}
          helperClass="drag-helper"
        />
      </div>
    )
  }

  updateBudget(budget) {
    this.setStateWithLikelihood({
      budget
    })
  }

  updateRate(rate) {
    this.setStateWithLikelihood({
      rate
    })
  }

  updateFeatureProp(id, prop, value) {
    const feature = this.state.features[id]
    feature[prop] = value
    this.setStateWithLikelihood({'features': {
      ...this.state.features,
      [id]: feature
    }})
  }

  moveFeature(id, direction) {
    const index = this.state.ids.indexOf(id)
    const newIndex = direction === 'up' ? index-1 : index+1
    this.reorderFeature(id, newIndex)
  }

  draggedFeature(event) {
    this.reorderFeature(this.state.ids[event.oldIndex], event.newIndex)
  }

  reorderFeature(id, newIndex) {
    const ids = this.state.ids
    const index = ids.indexOf(id)

    ids.splice(index, 1)
    ids.splice(newIndex, 0, id)

    this.setStateWithLikelihood({
      'ids': ids
    })
  }

  deleteFeature(id) {
    const state = this.state
    state.ids.splice(state.ids.indexOf(id), 1);
    delete state.features[id]
    this.setStateWithLikelihood(state)
  }

  addFeature() {
    const nextId = Math.max(...this.state.ids) + 1
    const ids = this.state.ids
    ids.push(nextId)

    this.setState({
      'ids': ids,
      'features': {
        ...this.state.features,
        [nextId]: {}
      }
    })
  }

  setStateWithLikelihood(sourceState) {
    const state = {
      ...this.state,
      ...sourceState
    }

    const features = state.features
    const ids = state.ids

    let totalbest = 0
    let totalworst = 0

    ids.map(id => {
      const feature = features[id]
      totalbest = totalbest + (feature.best * state.rate)
      totalworst = totalworst + (feature.worst * state.rate)

      const diff = totalworst - totalbest
      const bestleft = state.budget - totalbest

      const likelihood = 100/(diff/bestleft)

      features[id].likelihood = (likelihood < 0 ? 0 : Math.min(likelihood, 100)) + '%'

    })

    this.setState({
      ...state,
      features
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
