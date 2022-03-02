import React, { Component } from 'react'
import CardList from './Card/CardList.component';
import SearchBox from './SearchBox/SearchBox';

export default class Class extends Component {
      constructor(){
            super();
            this.state = {
                  monsters : [
                        
                  ],
                  searchField : ''
            }    
      }
      componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState( {monsters : users}))
      }
      handleChangess = e => {
            this.setState( {searchField : e.target.value})
            
      }
  render() { 
      const { monsters , searchField } = this.state ;
      const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
            <h1 className='logo-main'>Monsterious</h1>
            <SearchBox 
                  placeholder='search monsters...'
                  handleChanges={this.handleChangess}
            />
            <br /> <br />
            <CardList monsters={filteredMonster}></CardList>
      </div>
    )
  }
}
