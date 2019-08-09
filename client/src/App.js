import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import RegristrationForm from './components/RegristrationForm';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // arrays =[]
    }

  };

  componentDidMount() {
    this.getArrays();
  };

  getArrays = () => {

    axios.get('http://localhost:5000/api/restricted/data')

      .then(response => {
        console.log('Axios.get Response', response.data)
        const item = response.data
        this.setState({

        })

      })

      .catch(error => {
        console.log('Axios.get Error:', error)
      })

  };

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <RegristrationForm />

        </header>
      </div>

    );

  };

}


export default App;
