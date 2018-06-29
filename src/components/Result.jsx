import React, { Component } from 'react';
import UserInputRow from "./UserInputRow";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      directory: ["test1.md", "test2.html", "test3.txt"],
      result: null
    }
  }

  handleUserInputKeyPress = e => {
    if(e.key === 'Enter') {
      if(this.state.userInput === "ls") {
        this.showDirectory();
      }
      if(this.state.userInput === "clear") {
        this.setState({result: null, userInput: ""});
      }
    }
  }

  handleUserInputChange = e => {
    this.setState({userInput: e.target.value}
    )
  }

  showDirectory = () => {
    let result = this.state.directory.map((item, id) => <div key={id} className="result-item">{item}</div>)
    result.push(
      <UserInputRow 
        handleUserInputKeyPress={this.handleUserInputKeyPress} 
        handleUserInputChange={this.handleUserInputChange} 
        value={this.state.userInput}
      />
    )
    this.setState({result: result})
  }


  render() {
    return (
      <div>
        <UserInputRow 
          handleUserInputKeyPress={e => this.handleUserInputKeyPress(e)} 
          handleUserInputChange={e => this.handleUserInputChange(e)} 
          userInput={this.state.userInput}/>
        {this.state.result}
      </div>
    );
  }
}

export default Result;