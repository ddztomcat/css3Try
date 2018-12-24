import React, { Component } from 'react';
import { Button } from 'antd';
import './dice.global.scss';
export default class Home extends Component {
  state = {
    showAnimation: false
  }
  constructor(props) {
    super(props);
    this.cubeRef = React.createRef();
  }
  handleClick = () => {
    this.setState({
      showAnimation: !this.state.showAnimation
    });
  }
  generateAnswer = () => {
    let kx = parseInt(Math.random() * 6);
    let ky = parseInt(Math.random() * 6);
    this.cubeRef.current.style.transform = `rotateX(${kx *
      30}deg) rotateY(${ky * 30}deg)`;
    console.log(kx * 30, ky * 30);
  }
  componentDidUpdate(preProps, preState, snapshot) {
    if (!this.state.showAnimation) {
      this.generateAnswer();
    }
    console.log('componentDidUpdate');
  }
  render() {
    return (
      <div className="dice-wrapper">
        <div
          ref={this.cubeRef}
          className={`cube ${this.state.showAnimation ? 'my-animation' : ''}`}
        >
          <div className="surface surface-1"><span></span></div>
          <div className="surface surface-2"><span></span><span></span></div>
          <div className="surface surface-3"><span></span><span></span><span></span></div>
          <div className="surface surface-4">
            <div className="column"><span></span><span></span></div>
            <div className="column"><span></span><span></span></div>
          </div>
          <div className="surface surface-5">
            <div className="column">
              <span />
              <span />
            </div>
            <div className="column">
              <span />
            </div>
            <div className="column">
              <span />
              <span />
            </div>
          </div>
          <div className="surface surface-6">
            <div className="column">
              <span />
              <span />
              <span />
            </div>
            <div className="column">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <Button onClick={this.handleClick}>开始</Button>
      </div>
    );
  }
}
