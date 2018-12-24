import React, { Component } from 'react';
import { Button } from 'antd';
import './Home.global.scss';
export default class Home extends Component {
  state = {
    showAnimation: false
  }
  constructor(props) {
      super(props);
      this.cubeRef =  React.createRef();
  }
  handleClick = () => {
    this.setState({
      showAnimation: !this.state.showAnimation
    });
  }
  generateAnswer = () => {
    let kx = parseInt(Math.random() * 6);
    let ky = parseInt(Math.random() * 6);
    this.cubeRef.current.style.transform = `rotateX(${kx * 30}deg) rotateY(${ky * 30}deg)`;
    console.log(kx * 30, ky * 30);
  };
  componentDidUpdate(preProps, preState, snapshot) {
    if(!this.state.showAnimation) {
        this.generateAnswer();
    }
    console.log('componentDidUpdate');
  }
  render() {
    return (
      <div>
        <div ref={this.cubeRef} className={`cube ${this.state.showAnimation ? 'my-animation' : ''}`}>
          <div className="surface surface-1">1</div>
          <div className="surface surface-2">2</div>
          <div className="surface surface-3">3</div>
          <div className="surface surface-4">4</div>
          <div className="surface surface-5">5</div>
          <div className="surface surface-6">6</div>
        </div>
        <Button onClick={this.handleClick}>开始</Button>
      </div>
    );
  }
}
