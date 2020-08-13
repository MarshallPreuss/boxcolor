import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props);
      this.increment = this.increment.bind(this)
      this.state = {
        count: 0,
        color: "#00B1E1",
      };
    }
  
    increment() {
        this.setState({
          count: this.state.count + 1
        });
        this.toggleColor();
    }

    toggleColor() {
        if(this.state.color == "#00B1E1") {
            this.setState({
                color: "#E9573F"
            });
        } else {
            this.setState({
                color: "#00B1E1"
            });
        }
        this.setState({
          if: this.state.count + 1
        });
    }
    render() {
        return(
        <div style={{backgroundColor: this.state.color}} onClick={this.increment}>{this.state.count}</div>
        )
    }
}
  
  export default Counter;