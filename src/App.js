import './App.css';
import React,{Component} from 'react';
import JokeList from './JokeList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeList></JokeList>
      </div>
    );
  }
}
  
export default App;