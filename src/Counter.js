import React, { Component } from 'react'
import { ThemeContext } from './App'
export default class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initialCount,
    }
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div>
            <button style={theme} onClick={() => this.changeCount(+1)}>
              +
            </button>
            <span>{this.state.count}</span>
            <button style={theme} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <input type="text" />
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
  changeCount(amount) {
    this.setState((prevState) => {
      return { count: this.state.count + amount }
    })
  }
}
