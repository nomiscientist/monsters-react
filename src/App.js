import { Component } from 'react';

import CardList from './components/cards-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

  onSearchChange = (event) => {
    const searchField = event.target.value;
    this.setState({ searchField });
  }

  render() {
    console.log('render');

    const { profiles, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredprofiles = profiles.filter(
      profile => profile.name.toLocaleLowerCase().includes(searchField));

    return (
      <div className="App">
        
        <SearchBox 
          className='search-profiles'
          placeholder='search profiles'
          onSearchChange={onSearchChange}
        />
        <CardList profiles = {filteredprofiles} />
      </div>
    );
  }

}

export default App;
