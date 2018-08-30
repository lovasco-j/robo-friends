import React, {Component} from 'react';
import Counter from '../components/Counter';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../containers/SearchBox';
import ErrorBoundary from '../containers/ErrorBoundary';
import './Main.css'

class Main extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {
            searchField,
            onSearchChange,
            robots,
            isPending,
            error
        } = this.props;

        let filterRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });


        if (isPending) {
            return (<div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox onSearchChange={onSearchChange}/>
                <p>loading...</p>
            </div>);
        } else {
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <Counter/>
                    <SearchBox onSearchChange={onSearchChange}/>
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

export default Main;