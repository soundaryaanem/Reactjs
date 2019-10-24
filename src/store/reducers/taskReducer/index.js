/**
 * Description: Auth reducer
 * Date: 4/19/2019
 */

import *as Actions from '../../actions';

const initialState = {
    tasks: [
        {
            id: 1,
            name: 'Submit assignment1',
            creationTime: '2019-01-23',
            nickname: {
                data: {
                    name: 'React assignment1'
                }
            }
        },
        {
            id: 2,
            name: 'Submit assignment2',
            creationTime: '2019-01-23',
            nickname: {
                data: {
                    name: 'React assignment2'
                }
            }
        },
        {
            id: 3,
            name: 'Submit assignment3',
            creationTime: '2019-01-23',
            nickname: {
                data: {
                    name: 'React assignment3'
                }
            }
        },
    ]
}


const taskReducer = function (state = initialState, action) {
    switch ( action.type ) {
        case Actions.ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            };
        case Actions.SAVE_TASK:
            var task = action.payload;
            console.log([task]);
            for(var i in state.tasks) {
                if (state.tasks[i].id == task.id) {
                    state.tasks[i] = task;
                }
            }
            return {
                ...state,
            };
        case Actions.DELETE_TASK:
            var taskArray = state.tasks.filter((task) => {
                return task.id != action.payload
            }).map((task) => task);
            return {
                ...state,
                tasks: taskArray
            };
        default:
            return state;
    }
};

export default taskReducer;