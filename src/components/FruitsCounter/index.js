// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  eatMango = () => {
    this.setState(previous1 => ({count1: previous1.count1 + 1}))
  }

  eatBanana = () => {
    this.setState(previous2 => ({count2: previous2.count2 + 1}))
  }

  render() {
    const {count1} = this.state
    const {count2} = this.state
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="heading">
            Bob ate <span className="span">{count1}</span> mangoes{' '}
            <span className="span">{count2}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruits">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruits">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
