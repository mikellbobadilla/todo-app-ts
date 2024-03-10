import { createBrowserRouter, redirect } from 'react-router-dom'

import { ListOfTodos } from '../components/ListOfTodos'
import { CreateTodo } from '../pages/CreateTodo'
import { IndexPage } from '../pages/IndexPage'
import { UpdateTodo } from '../pages/UpdateTodo'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: IndexPage,
        loader: ({ request }) => {
            if (new URL(request.url).pathname === '/') {
                return redirect('/todos')
            }
            return null
        },
        children: [
            {
                index: true,
                path: 'todos',
                Component: ListOfTodos
            },
            {
                path: 'add-todo',
                Component: CreateTodo
            },
            {
                path: 'update-todo/:id',
                Component: UpdateTodo
            }
        ]
    }
])