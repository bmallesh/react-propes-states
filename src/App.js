import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/home'
import Tablerow from './components/tablerow'
class App extends Component {
constructor(){
  super()
  this.state = {
    subval:'janu',
 data:[
   {name:'ml',age:21,sal:2000}
   ,{name:'dk',age:24,sal:3000}
   ,{name:'vk',age:20,sal:4000}
 ],
 name:'',
 names:'',
 age:'',
 sal:'',
  }
  this.handleChange = this.handleChange.bind(this)
  this.funhandile = this.funhandile.bind(this);
  this.insertdata = this.insertdata.bind(this)
}


handleChange(event) {
  this.setState({
      [event.target.name]: event.target.value
  })
}
insertdata(){
  alert(this.state.names)
  this.setState={
    subval:'dataes',
    // data:this.state.data.push({name:this.state.names,age:this.state.age,sal:this.state.sal}),
  }
  console.log(this.state.data)
  console.log("hello"+this.state.subval)
  alert(this.state.subval)
}
funhandile(){
  alert(this.state.name)
}

  render() {
   if(!this.state.subval){
    return (
      <div className="App">
        <Header/>
        <h1>for loop</h1>
        <div>
          <label>name: </label>
          <input type='text' name='names' value={this.state.names} onChange={this.handleChange}></input>
          <label>age: </label>
          <input type='number' name='age' value={this.state.age} onChange={this.handleChange}></input>
          <label>sal: </label>
          <input type='number' name='sal'value={this.state.data.sal} onChange={this.handleChange}></input>
          <button onClick={this.insertdata}>submit</button>
        </div>
        <br></br>
        <div>
          <input type='text' id='pwd' name='name' value={this.state.name} onChange={this.handleChange} />
          <button onClick={this.funhandile}>submit</button>
        </div>
        <div className='tablediv'>
        <br/>
        <table border='1' align='center'>
          {this.state.data.map((p,i)=> <Tablerow key={i} data={p} /> )}
        </table>
        </div>
        <h1>If condition</h1>
        <div>
          { (1==0) ? <h1>condition true</h1>:<h1>condition false</h1> }
        </div>
      </div>
    );
   }else{
    return (
      <div className="App">
        <Header/>
        <h1>after submit</h1>
        <h1>for loop</h1>
        <div>
          <label>name: </label>
          <input type='text' name='names' value={this.state.names} onChange={this.handleChange}></input>
          <label>age: </label>
          <input type='number' name='age' value={this.state.age} onChange={this.handleChange}></input>
          <label>sal: </label>
          <input type='number' name='sal'value={this.state.data.sal} onChange={this.handleChange}></input>
          <button onClick={this.insertdata}>submit</button>
        </div>
        <br></br>
        <div>
          <input type='text' id='pwd' name='name' value={this.state.name} onChange={this.handleChange} />
          <button onClick={this.funhandile}>submit</button>
        </div>
        <div className='tablediv'>
        <br/>
        <table border='1' align='center'>
          {this.state.data.map((p,i)=> <Tablerow key={i} data={p} /> )}
        </table>
        </div>
        <h1>If condition</h1>
        <div>
          { (1==0) ? <h1>condition true</h1>:<h1>condition false</h1> }
        </div>
      </div>
    );
   }
  }
}

// class Tablerow extends Component {
//   render(){
//     var trstyles={
//       color:'#FF0000'
//   }
//     return(
//       <tr style= {trstyles}>
//         <td>{this.props.data.name}</td>
//         <td>{this.props.data.age}</td>
//         <td>{this.props.data.sal}</td>
//       </tr>
//     )
//   }
// }

export default App;
