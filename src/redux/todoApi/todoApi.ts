import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TodoId, TodoResponse, TodoWithId } from '../types/types'


export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/server/api/' }),
    endpoints: (builder) => ({
        getTodoById: builder.query<TodoWithId, TodoId>({
            query: (id) => `todos/${id}`
        }),
        getTodos: builder.query<TodoResponse, void>({
            query: () => 'todos'
        }),
        deleteTodoById: builder.mutation<void, TodoId>({
            query: (id) => ({
                url: `todos/${id}`,
                method: 'DELETE'
            })
        }),

    })
})

export const { useGetTodosQuery, useGetTodoByIdQuery, useDeleteTodoByIdMutation } = todoApi