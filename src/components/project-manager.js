import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchProjects, addProject, selectProject} from '../actions/project'

class ProjectManager extends Component {
  nextId() {
    if (!this.props.projects) {
      return 0
    }
    return Math.max(...this.props.projects.map(feature => feature.id)) + 1
  }

  renderProjects() {
    if (!this.props.projects) {
      return
    }
    return this.props.projects.map(project => {
      return <option key={project.id} value={project.id}>{project.name}</option>
    })
  }

  componentDidUpdate(previousProps) {
    if (previousProps.projects.length && this.props.projects.length > previousProps.projects.length) {
      this.props.selectProject(this.props.projects[this.props.projects.length-1].id)
    }
  }

  componentWillMount() {
    this.props.fetchProjects()
  }

  render() {
    return (
      <div>
        <label>Projects</label>
        <div>
          <div className="project-select-wrapper">
            <select
              value={this.props.selectedProjectId !== null ? this.props.selectedProjectId : "select"}
              onChange={event => this.props.selectProject(event.target.value)}
            >
              <option disabled value="select" >Select your project</option>
              {this.renderProjects()}
            </select>
          </div>
          <button
            className="project-selector"
            onClick={event => this.props.addProject(this.nextId())}
            >New Project</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({selectedProjectId, projects}) {
  return {selectedProjectId, projects}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchProjects, addProject, selectProject}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManager)
