import React, {Component} from "react";
import CardList from './CardList'
import SearchBox from './SearchBox'
import 'tachyons'
import { robots } from './robots'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (thingy) => {
        console.log(thingy.target.value)

        this.setState({ searchField: thingy.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>
        );
    }
}
export default App;