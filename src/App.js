import { useState, useEffect } from 'react';

import CardList from './components/cards-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [filteredprofiles, setFilteredProfiles] = useState(profiles);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((responses) => responses.json())
      .then((users) => setProfiles(users));
  }, []);

  useEffect(() => {
    const newfilteredprofiles = profiles.filter(
      profile => profile.name.toLocaleLowerCase().includes(searchField));

      setFilteredProfiles(newfilteredprofiles);
  }, [profiles, searchField]);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  }



  return (
    <div className="App">
      <h1 className='app-title'>Profiles Dashboard</h1>
      <SearchBox
        className='search-profiles'
        placeholder='search profiles'
        onSearchChange={onSearchChange}
      />

      <CardList profiles={filteredprofiles} />

    </div>


  );
}

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       profiles: [],
//       searchField: ''
//     }
//     console.log('constructor');
//   }

//   componentDidMount() {
//     console.log('componentDidMount');

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((responses) => responses.json())
//       .then((users) => this.setState(() => {
//         return { profiles: users }
//       }, () => {
//         console.log(this.state.profiles);
//       }
//       ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value;
//     this.setState({ searchField });
//   }

//   render() {
//     console.log('render');

//     const { profiles, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredprofiles = profiles.filter(
//       profile => profile.name.toLocaleLowerCase().includes(searchField));

//     return (
//       <div className="App">

//         <h1 className='app-title' >Profiles Dashboard</h1>

//         <SearchBox 
//           className='search-profiles'
//           placeholder='search profiles'
//           onSearchChange={onSearchChange}
//         />
//         <CardList profiles = {filteredprofiles} />
//       </div>
//     );
//   }

// }

export default App;
