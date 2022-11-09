import React, { Component } from 'react';
//import images
import left from "../assets/look-left.jpeg";
import right from "../assets/look-right.jpeg";


class ChallengeOne extends Component {
  //declare the state here
  state = {
    mutableVariable:undefined
  };

  //click left/right button handler goes here
handleClick=(props)=>{
  if(props ==="left"){
    this.setState({mutableVariable:true})
  }else{
    this.setState({mutableVariable:false})
  }

}

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.mutableVariable ? left : right }
            alt=""
          />
        </div>
        <button className="btn" onClick={()=> this.handleClick("left")}>⭠</button>
        <button className="btn" onClick={()=> this.handleClick("right")}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;