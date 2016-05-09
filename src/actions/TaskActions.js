import axios from 'axios'
import { ENDPOINT_TASK } from '../constants/Api'

export const CREATE_TASK_START = 'CREATE_TASK_START';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILED = 'CREATE_TASK_FAILED';
export const LIST_TASKS_START = 'LIST_TASKS_START';
export const LIST_TASKS_SUCCESS = 'LIST_TASKS_SUCCESS';
export const LIST_TASKS_FAILED = 'LIST_TASKS_FAILED';
export const RETRIEVE_TASK_START = 'RETRIEVE_TASK_START';
export const RETRIEVE_TASK_SUCCESS = 'RETRIEVE_TASK_SUCCESS';
export const RETRIEVE_TASK_FAILED = 'RETRIEVE_TASK_FAILED';
export const UPDATE_TASK_START = 'UPDATE_TASK_START';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILED = 'UPDATE_TASK_FAILED';
export const LIST_RUNNING_TASKS_START = 'LIST_RUNNING_TASKS_START';
export const LIST_RUNNING_TASKS_SUCCESS = 'LIST_RUNNING_TASKS_SUCCESS';
export const LIST_RUNNING_TASKS_FAILED = 'LIST_RUNNING_TASKS_FAILED';
export const LIST_MORE_TASKS_START = 'LIST_MORE_TASKS_START';
export const LIST_MORE_TASKS_SUCCESS = 'LIST_MORE_TASKS_SUCCESS';
export const LIST_MORE_TASKS_FAILED = 'LIST_MORE_TASKS_FAILED';
export const RETRIEVE_TASK_META_START = 'RETRIEVE_TASK_META_START';
export const RETRIEVE_TASK_META_SUCCESS = 'RETRIEVE_TASK_META_SUCCESS';
export const RETRIEVE_TASK_META_FAILED = 'RETRIEVE_TASK_META_FAILED';


export function createTask(task) {
    return dispatch => {
        dispatch(createTaskStart(task));
        return axios.post(ENDPOINT_TASK, task)
            .then(function(response) {
                dispatch(createTaskSuccess(response.data))
            }).catch(function(response) {
                dispatch(createTaskFailed(response.data))
            });
    }
}

export function createTaskStart(task) {
    return {
        type: CREATE_TASK_START,
        task
    }
}

export function createTaskSuccess(task) {
    return {
        type: CREATE_TASK_SUCCESS,
        task
    }
}

export function createTaskFailed(error) {
    return {
        type: CREATE_TASK_FAILED,
        error
    }
}

export function listTasks(filter) {
    return dispatch => {
        dispatch(listTasksStart(filter));
        return axios.get(ENDPOINT_TASK, {params: filter})
            .then(function(response) {
                dispatch(listTasksSuccess(response.data))
            }).catch(function(response) {
                dispatch(listTasksFailed(response.data))
            });
    }
}

export function listTasksStart(filter) {
    return {
        type: LIST_TASKS_START,
        filter
    }
}

export function listTasksSuccess(response) {
    return {
        type: LIST_TASKS_SUCCESS,
        items: response.results,
        previous: response.previous,
        next: response.next
    }
}

export function listTasksFailed(error) {
    return {
        type: LIST_TASKS_FAILED,
        error
    }
}

export function retrieveTask(id) {
    return dispatch => {
        dispatch(retrieveTaskStart(id));
        dispatch(retrieveTaskMeta(id));
        return axios.get(ENDPOINT_TASK + id + '/')
            .then(function(response) {
                dispatch(retrieveTaskSuccess(response.data))
            }).catch(function(response) {
                dispatch(retrieveTaskFailed(response.data))
            });
    }
}

export function retrieveTaskStart(id) {
    return {
        type: RETRIEVE_TASK_START,
        id
    }
}

export function retrieveTaskSuccess(task) {
    return {
        type: RETRIEVE_TASK_SUCCESS,
        task
    }
}

export function retrieveTaskFailed(error) {
    return {
        type: RETRIEVE_TASK_FAILED,
        error
    }
}

export function updateTask(id, data) {
    return dispatch => {
        dispatch(updateTaskStart(id));
        return axios.patch(ENDPOINT_TASK + id + '/', data)
            .then(function(response) {
                dispatch(updateTaskSuccess(response.data))
            }).catch(function(response) {
                dispatch(updateTaskFailed(response.data))
            });
    }
}

export function updateTaskStart(id) {
    return {
        type: UPDATE_TASK_START,
        id
    }
}

export function updateTaskSuccess(task) {
    return {
        type: UPDATE_TASK_SUCCESS,
        task
    }
}

export function updateTaskFailed(error) {
    return {
        type: UPDATE_TASK_FAILED,
        error
    }
}

export function listRunningTasks() {
    return dispatch => {
        var filter = {filter: 'running'};
        dispatch(listRunningTasksStart(filter));
        return axios.get(ENDPOINT_TASK, {params: filter})
            .then(function(response) {
                dispatch(listRunningTasksSuccess(response.data))
            }).catch(function(response) {
                dispatch(listRunningTasksFailed(response.data))
            });
    }
}

export function listRunningTasksStart(filter) {
    return {
        type: LIST_RUNNING_TASKS_START,
        filter
    }
}

export function listRunningTasksSuccess(response) {
    return {
        type: LIST_RUNNING_TASKS_SUCCESS,
        items: response.results,
        previous: response.previous,
        next: response.next
    }
}

export function listRunningTasksFailed(error) {
    return {
        type: LIST_RUNNING_TASKS_FAILED,
        error
    }
}

export function listMoreTasks(url) {
    return dispatch => {
        dispatch(listMoreTasksStart(url));
        return axios.get(url)
            .then(function(response) {
                dispatch(listMoreTasksSuccess(response.data))
            }).catch(function(response) {
                dispatch(listMoreTasksFailed(response.data))
            });
    }
}

export function listMoreTasksStart(url) {
    return {
        type: LIST_MORE_TASKS_START,
        url
    }
}

export function listMoreTasksSuccess(response) {
    return {
        type: LIST_MORE_TASKS_SUCCESS,
        items: response.results,
        previous: response.previous,
        next: response.next
    }
}

export function listMoreTasksFailed(error) {
    return {
        type: LIST_MORE_TASKS_FAILED,
        error
    }
}

export function retrieveTaskMeta(id) {
    return dispatch => {
        dispatch(retrieveTaskMetaStart(id));
        return axios.get(ENDPOINT_TASK + id + '/meta/')
            .then(function(response) {
                dispatch(retrieveTaskMetaSuccess(response.data))
            }).catch(function(response) {
                dispatch(retrieveTaskMetaFailed(response.data))
            });
    }
}

export function retrieveTaskMetaStart(id) {
    return {
        type: RETRIEVE_TASK_META_START,
        id
    }
}

export function retrieveTaskMetaSuccess(response) {
    return {
        type: RETRIEVE_TASK_META_SUCCESS,
        task: response.task,
        meta: {participation: response.participation, payment: response.payment}
    }
}

export function retrieveTaskMetaFailed(error) {
    return {
        type: RETRIEVE_TASK_META_FAILED,
        error
    }
}
