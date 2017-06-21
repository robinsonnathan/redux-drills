import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addGuest, removeGuest } from './ducks/guestList'

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inputBox: '',
    }
  }

  handleInputChange(e) {
    this.setState({inputBox: e.target.value})
  }

  handleSubmit(e){
    this.props.addGuest(this.state.inputBox);
    this.setState({inputBox: ''})
  }

  render() {
     return (
       <div className="App">
         <h1>DevMountain Hackathon</h1>
         <h3>Guest List:</h3>
         <ul>
           {this.props.list.map( (guest, i) => {
             return (
               <div key={i} className="list-item">
                 <li>{guest}</li>
                 <button onClick={()=> this.props.removeGuest(i)}>Remove</button>
               </div>
             )
           })}
         </ul>
         <form
           onSubmit={this.handleSubmit}
           className="add-guest">
           Add guest: <input
           value={this.state.text}
           onChange={this.handleInputChange}
           />
           <button>Add</button>
         </form>
       </div>
     );
   }
 }





function mapStateToProps(state) {
  return {
    list: state.guests
  };
}

export default connect(mapStateToProps, { addGuest })(App);
