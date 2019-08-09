import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import RegristrationForm from './components/RegristrationForm';
import Display from './components/Display';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
    }

  };

  getItems = () => {

     axios.get('http://localhost:5000/api/restricted/data')

      .then(response => {
         console.log('Axios.get Response', response.data)
         this.setState({
           items:response.data

         })

      })

      .catch(error => {
        console.log('Axios.get Error:', error)
      })

  };

  componentDidMount() {
    this.getItems();
  };

  render() {
    console.log('Render:', this.state.items)
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <RegristrationForm />
        </header>
        
        <div> 
          {this.state.items.map(e => <Display 
            course = {e.course}
            ingredients = {e.ingredients}
            name = {e.name}
            technique = {e.technique}
            />
          )}
        </div>

      </div>

    );

  };

}


export default App;
