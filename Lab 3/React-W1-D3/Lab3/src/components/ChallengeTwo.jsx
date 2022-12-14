import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() { 
    setTimeout(() => {
      this.setState({arr:studentList})
      
    }, 3000);
  }

  //random button handler
  randomize = (props) => {
    //shuffle the array and set the state
    this.setState((prevState) => {
      return {arr: prevState.arr.sort(()=> 0.5- Math.random())}
    })
  }

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */
              this.state.arr.map((student,index)=>(
                <div key={index}>
                  <h3>{student}</h3>
                </div>
              )
              )
            }
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}
