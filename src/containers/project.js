import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Budget from './budget'
import Rate from './rate'
import FeatureList from './feature-list'

class Project extends Component {
  render() {
    if (this.props.project) {
      return (
        <div>
          <h3>{this.props.project.name}</h3>
            <div className="meta clearfix">
              <Budget />
              <Rate />
            </div>
            <FeatureList />
        </div>
      )
    }
    return <div>Select a project or create a new one</div>
  }
}

function mapStateToProps({projects, selectedProjectId}) {
  return {project: projects[selectedProjectId]}
}

export default connect(mapStateToProps)(Project)
