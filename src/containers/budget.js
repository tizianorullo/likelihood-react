import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {updateBudget} from '../actions/budget'

class Budget extends Component {
  render() {
    return (
      <div className="float-left">
        <label>Budget</label>
        <input
          value={this.props.budget}
          onChange={({target}) => this.props.updateBudget(target.value)}
        />
      </div>
    )
  }
}

function mapStateToProps({budget}) {
  return {budget}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateBudget}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Budget)
