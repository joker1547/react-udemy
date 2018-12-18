import React, { Component } from 'react';
//import Person from './Person/Person';
import './App.css';
import ValidateComponent from './ValidateComponent/ValidateComponent';
import CharComponent from './CharComponent/CharComponent';

//import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'niam', age: 29},
      {name: 'Deepa', age: 30}, 
    ],
    userName : "Santhose",
    inputLength : 0,
    inputText : ""


  }

  switchNameHandler = ( num ) => {
    
    console.log(this.state.persons[num]);
    let newPersons = {...this.state.persons};
    newPersons[num].age++;
    this.setState({persons: newPersons});


  }

  nameCahngedHandler = (event) => {
    var newPersons = [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Deepa', age: 30}, 
    ];
    this.setState( {persons : newPersons});
  }

  userNameChangeHandler = (event) => {
    this.setState(
      { userName : event.target.value}
    );
  }

  changeInputLength  = (event) => {
    const inputData = event.target.value;
    
    this.setState(
      {inputLength : inputData.length, inputText : inputData }
    )
  }

  removeCharHandler = (index) => {
    console.log(index);
    const inputInfo = [...this.state.inputText];
    console.log(inputInfo);
    inputInfo.splice(index, 1);
    console.log(inputInfo);
    const data = inputInfo.join("");
    this.setState( {inputText : data});
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <h2>Hi I am another heading</h2>
        <input type="text" onChange={this.changeInputLength}/>
        <p>{this.state.inputLength}</p>
        <ValidateComponent inputDataLength={this.state.inputLength}/>
        {
          this.state.inputText.split('').map((charData, index)=>{
            return <CharComponent charValue={charData} clicked={() => this.removeCharHandler(index)}  />
          })
        }
          
        
      </div>
    );
  }
}

export default App;
