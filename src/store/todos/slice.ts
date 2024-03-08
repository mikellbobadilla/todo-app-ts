import { createSlice } from '@reduxjs/toolkit'

/* Declared types */
export interface Todo {
    title: string,
    description: string,
    targetDate: string,
    isDone: boolean
}

export type TodoId = string

export interface TodoWithId extends Todo {
    /* Todo to identify */
    id: TodoId
}

/* Default Initital State */
const DEFAULT_STATE = [
    {
        id: '1',
        title: 'Learn Redux',
        description: 'Learn Redux with Redux Toolkit',
        targetDate: '2021-10-10',
        isDone: true
    },
    {
        id: '2',
        title: 'Learn React',
        description: 'Learn React with Redux Toolkit',
        targetDate: '2021-10-10',
        isDone: false
    }
]

const initialState: TodoWithId[] = DEFAULT_STATE

/* Create Slice */
export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // Logic to add a todo and manage the state
    }
})

// Export the action creators
export default todosSlice.reducer

// Todo: Use the following code to export the action creators
// export const { } = todosSlice.actions

