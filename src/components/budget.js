import React from 'react'

class Budget extends React.Component {
  render() {
    return (
      <div className="float-left">
        <label htmlFor="budget">Budget</label>
        <input
          value={this.props.budget}
          onChange={event => this.props.onBudgetChange(event.target.value)}
        />
      </div>
    )
  }
}

export default Budget
