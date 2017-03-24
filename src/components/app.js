import React, { Component } from 'react'

import ProjectManager from '../containers/project-manager'
import Project from '../containers/project'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="meta clearfix">
          <ProjectManager />
          <Project />
        </div>
      </div>
    )
  }
}
