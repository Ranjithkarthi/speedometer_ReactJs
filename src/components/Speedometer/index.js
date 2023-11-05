// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevSpeed =>
      prevSpeed.speed < 200 ? {speed: prevSpeed.speed + 10} : {speed: 200},
    )
  }

  break = () => {
    this.setState(prevSpeed =>
      prevSpeed.speed > 0 ? {speed: prevSpeed.speed - 10} : {speed: 0},
    )
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
          className="speedometer-img"
        />
        <h1>
          Speed is <span>{speed}</span>mph
        </h1>
        <p className="desc">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="btn-1" type="button" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="btn-2" type="button" onClick={this.break}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
