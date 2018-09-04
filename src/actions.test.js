import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from "./constants";

const mockStore = configureStore([thunk]);

describe('Set search field action', () => {
    it('Should set search field', () => {
        expect(actions.setSearchField('text to test'))
            .toEqual({
                type: CHANGE_SEARCH_FIELD,
                payload: 'text to test',
            });
    })
});

describe('Request robot action', () => {

    beforeEach(() => {
        fetch.resetMocks();
    })

    it('should dispatch REQUEST_ROBOTS_PENDING and REQUEST_ROBOTS_SUCCESS actions', () => {

        fetch.mockResponse(
            JSON.stringify(['robot1', 'robot2', 'robot3'])
        );

        const store = mockStore({});
        const expectedActions = [
            {
                type: REQUEST_ROBOTS_PENDING
            },
            {
                type: REQUEST_ROBOTS_SUCCESS,
                payload: ['robot1', 'robot2', 'robot3']
            }
        ];

        return store.dispatch(actions.requestRobots())
            .then(() => {
                store.getActions().map((action, index) => {
                    expect(action).toEqual(expectedActions[index])
                });
            });

    });

    it('should dispatch REQUEST_ROBOTS_FAILED action', () => {
        fetch.mockReject(new Error('Fetch failed'));

        const store = mockStore({});

        const expectedActions = [
            {
                type: REQUEST_ROBOTS_PENDING
            },
            {
                type: REQUEST_ROBOTS_FAILED,
                payload: 'Fetch failed',
            }
        ];

        return store.dispatch(actions.requestRobots())
            .then(() => {
                store.getActions().map((action, index) => {
                    expect(action).toEqual(expectedActions[index]);
                })
            })

    });
});
