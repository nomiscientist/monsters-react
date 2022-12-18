import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      profiles: [],
      searchField: ''
    }
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((responses) => responses.json())
      .then((users) => this.setState(() => {
        return { profiles: users }
      }, () => {
        console.log(this.state.profiles);
      }
      ));
  }

  render() {
    console.log('render');

    const filteredprofiles = this.state.profiles.filter(
      profile => profile.name.toLocaleLowerCase().includes(this.state.searchField));

    return (
      <div className="App">
        <input className='search' type='search' placeholder='search profiles'
          onChange={(event) => {
            const searchField = event.target.value;
            this.setState({ searchField });
          }
          }
        />

        {
          filteredprofiles.map((profile) => {
            return (<div key={profile.id}>
              <h1>{profile.name}</h1></div>)
          })
        }
      </div>
    );
  }

}

export default App;
