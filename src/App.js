import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
 
class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchCriteria:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  onSearchCriteriaChange = (event) =>{
    
    this.setState({
      searchCriteria: event.target.value
    })
  };
  render(){
    const {monsters,searchCriteria} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchCriteria.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monster' handleChange={this.onSearchCriteriaChange}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
