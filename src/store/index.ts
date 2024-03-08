import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todos/slice'

export const store = configureStore({
    reducer: {
        // Here we will add reducers
        todos: todoReducer
    }
})

// Declare the type of the store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch