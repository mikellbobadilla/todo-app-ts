import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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
        deleteTodoById: (state, action: PayloadAction<TodoId>) => {
            const id = action.payload
            return state.filter(todo => todo.id !== id)
        },
        createTodo: (state, action: PayloadAction<Todo>) => {
            const newTodo: TodoWithId = {
                id: crypto.randomUUID(),
                ...action.payload
            }
            state.push(newTodo)
        },
        updateSetIsDone: (state, action: PayloadAction<{ id: TodoId, isDone: boolean }>) => {
            const { id, isDone } = action.payload
            const todo = state.find(todo => todo.id === id)
            if (todo) {
                todo.isDone = isDone
            }
        },
        updateTodoById: (state, action: PayloadAction<{ id: TodoId, todo: Todo }>) => {
            const { id, todo } = action.payload
            const todoToUpdate = state.find(todo => todo.id === id)
            if (todoToUpdate) {
                todoToUpdate.title = todo.title
                todoToUpdate.description = todo.description
                todoToUpdate.targetDate = todo.targetDate
            }
        }
    }
})

// Export the action creators
export default todosSlice.reducer

export const { deleteTodoById, createTodo, updateSetIsDone, updateTodoById } = todosSlice.actions

