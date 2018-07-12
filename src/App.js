import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            robots: [],
            searchValue: '',
        };
    }

    componentDidMount() {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(robots => this.setState({robots}));
        }, 3000);

    }

    onSearchChange(value) {
        this.setState({searchValue: value});
    }

    render() {

        let filterRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
        });

        if (this.state.robots.length === 0) {
            return (<div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange.bind(this)}/>
                <p>loading...</p>
            </div>);
        } else {
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox onSearchChange={this.onSearchChange.bind(this)}/>
                    <CardList robots={filterRobots}/>
                </div>
            );
        }
    }
}

export default App;