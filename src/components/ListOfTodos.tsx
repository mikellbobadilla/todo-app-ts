import React, { useEffect } from 'react'
import { toast } from 'sonner'
import { useDeleteTodoByIdMutation, useGetTodosQuery } from '../redux/todoApi/todoApi'
import { Spinner } from './Spinner'
import { TodoCard, TodoWithId } from './TodoCard'

export function ListOfTodos() {

    const { data: todos, isLoading, isError, error } = useGetTodosQuery()

    useEffect(() => {

        if (isError && error) {
            toast.error('Hay un problema para obtener los todos')
        }

    }, [isError, error])

    return (
        isError
            ? (<p className='text-xl text-red-300 text-center mt-7'>No se Pudieron cargar los resultados</p>)
            : (isLoading)
                ? (<LoadingTodo />)
                : (<Todos todos={todos?.content as TodoWithId[]} />)
    )
}


function LoadingTodo() {
    return (
        <section className='flex justify-center mt-8'>
            <Spinner styles='size-10' />
        </section>
    )
}

function Todos({ todos }: React.PropsWithChildren<{ todos: TodoWithId[] }>) {

    const [deleteTodo, { data }] = useDeleteTodoByIdMutation()

    return (
        <section>
            <div className='flex justify-between items-center py-2'>
                <h2 className='text-2xl text-sky-500 font-semibold'>
                    List of Todos
                </h2>
                <p>
                    Todos
                    <span className='bg-blue-200 ml-2 border text-blue-800 border-blue-600 px-4 inline-block rounded-2xl text-sm'>
                        {todos?.length}
                    </span>
                </p>
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3'>
                {todos?.map(todo => (
                    <TodoCard key={todo.id} todo={todo} actionClick={() => deleteTodo(todo.id)} editLink={`/update-todo/${todo.id}`} />
                ))}
            </ul>
        </section>
    )
}