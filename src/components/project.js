import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Budget from './budget'
import Rate from './rate'
import FeatureList from './feature-list'
import {updateName} from '../actions/name'

class Project extends Component {

  render() {
    if (this.props.project) {
      return (
        <div>
          <input
            name="project-name"
            ref={(input) => this.nameInput = input}
            value={this.props.project.name}
            onChange={({target}) => this.props.updateName(target.value)}
          />
          <span onClick={() => this.nameInput.focus()}>✏️</span>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateName}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
