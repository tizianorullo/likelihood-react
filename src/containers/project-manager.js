import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {addProject, selectProject} from '../actions/project'

class ProjectManager extends Component {
  nextId() {
    if (!this.props.projects.length) {
      return 0;
    };
    const ids = this.props.projects.map(({id}) => id)
    return Math.max(ids) + 1
  }

  renderProjects() {
    return this.props.projects.map(project => {
      return <option key={project.id} value={project.id}>{project.name}</option>
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.projects.length > prevProps.projects.length) {
      this.props.selectProject(this.props.projects[this.props.projects.length-1].id)
    }
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
  return bindActionCreators({addProject, selectProject}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManager)
