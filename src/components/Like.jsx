import React, { Component } from 'react';
class Like extends Component {
    state = {
        count: 0
    }
    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }

    render() {
        return (
            <div>
                <span onClick={this.incrementMe} role="img" aria-label="Heart">❤️ {this.state.count}</span> 
            </div>
        );
    }
}

export default Like;
