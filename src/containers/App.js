import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../containers/ErrorBoundary';

class App extends Component {
    constructor() {
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
        const { robots, searchValue } = this.state;

        let filterRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchValue.toLowerCase())
        });

        if (robots.length === 0) {
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
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;