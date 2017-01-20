import React from 'react'

class Rate extends React.Component {
  render() {
    return (
      <div className="float-left">
        <label htmlFor="rate">Rate</label>
        <input
          value={this.props.rate}
          onChange={event => this.props.onRateChange(event.target.value)}
        />
      </div>
    )
  }
}

export default Rate
