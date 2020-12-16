import React from 'react';
import CardList from './card-list/card-list.component.jsx'
import SearchBar from './searchBar/search-bar.component.jsx'
import axios from 'axios'
class App extends React.Component{
    constructor(){
        super();
        this.state ={
            monsters:[],
            inputValue:""
        
        }
    }
 
  
    async componentDidMount(){
       const users = await axios.get(`https://jsonplaceholder.typicode.com/users`);
       this.setState({
           monsters:users.data
       })

    }
   
      
    render(){
         //console.log(this.state.monsters)
        const {monsters,inputValue} = this.state
        const filMonsters = monsters.filter(monster=>monster.name.includes(inputValue))
        return(
            <div>
                <SearchBar handleChange = {e=>{this.setState({inputValue:e.currentTarget.value })}} ></SearchBar>
                <CardList monsters = {filMonsters}/>
                
              
            </div>
        )
    }
}
export default App;