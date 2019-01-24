import React, { Component } from 'react';
import './App.css';
import { peopleList} from './people.service';

const getRandomIndex = () => {
  const peopleCount = peopleList.length;
  return Math.round(Math.random() * peopleCount);
};

class App extends Component {
  constructor() {
    super({});
    setInterval(() => {
      this.changePerson();
    }, 500);
  }

  state = {
    index: getRandomIndex()
  };

  changePerson = () => {
    const randomIndex = getRandomIndex();
    this.setState({
        index: randomIndex
    });
  };

  render() {
    const person = peopleList[this.state.index];
    return (
      <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img style={{width: '500px', transition: 'opacity .25s ease-in-out'}} src={person.image} key={person.id} />
          <h1>Merci {person.name} !</h1>
        </div>
      </div>
    );
  }
}

export default App;
