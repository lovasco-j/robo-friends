import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';
import * as reducers from './reducers';
import * as actions from './actions';

describe('search robots', () => {
    const initialState = {
        robots: [],
        searchField: '',
    };

    it('should return default state', () => {
        expect(reducers.searchRobots(undefined, {}))
            .toEqual(initialState);
    })

    it('should handle the CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(undefined, actions.setSearchField('bob')))
            .toEqual({robots: [], searchField: 'bob'});
    });
})

describe('request robots', () => {
   const initialState = {
        isPending: false,
        robots: [],
        error: false,
   };

    it('should return default state', () => {
        expect(reducers.requestRobots(undefined, {}))
            .toEqual(initialState);
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialState, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            isPending: true,
            robots: [],
            error: false,
        })
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialState, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [1,2,3,4],
        })).toEqual({
            isPending: false,
            robots: [1,2,3,4],
            error: false,
        })
    });

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialState, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'error message.',
        })).toEqual({
            isPending: false,
            robots: [],
            error: 'error message.',
        })
    });

});
