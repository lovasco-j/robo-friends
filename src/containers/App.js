import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';

import {
    setSearchField,
    requestRobots,
} from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => {
            dispatch(setSearchField(event.target.value))
        },
        onRequestRobots: () => dispatch(requestRobots())
    }
}

const App = (props) => <Main {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(App);
