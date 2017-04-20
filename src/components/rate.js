import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {updateRate} from '../actions/rate'

class Rate extends Component {
  render() {
    return (
      <div className="float-left">
        <label>Rate</label>
        <input
          value={this.props.rate}
          onChange={({target}) => this.props.updateRate(target.value)}
        />
      </div>
    )
  }
}

function mapStateToProps({projects, selectedProjectId}) {
  return {rate: projects[selectedProjectId].rate}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateRate}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Rate)
