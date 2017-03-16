import React, { Component } from 'react'

import Budget from '../containers/budget'
import Rate from '../containers/rate'
import FeatureList from '../containers/feature-list'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="meta clearfix">
          <Budget />
          <Rate />
        </div>
        <FeatureList />
      </div>
    )
  }
}
