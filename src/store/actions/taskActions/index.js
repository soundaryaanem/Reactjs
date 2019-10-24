export const ADD_TASK = 'ADD_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function addTask(data) {
    return (dispatch) => {
        dispatch({
            type : ADD_TASK,
            payload : data
        })
    }
}

export function saveTask(data) {
    return (dispatch) => {
        dispatch({
            type : SAVE_TASK,
            payload : data
        })
    }
}

export function deleteTask(data) {
    return (dispatch) => {
        dispatch({
            type : DELETE_TASK,
            payload : data
        })
    }
}