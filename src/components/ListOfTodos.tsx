import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../hooks/store'
import { useTodoAction } from '../hooks/useTodoAction'
import { EditIcon } from './icons/EditIcons'
import { TrashIcon } from './icons/TrashIcon'

export function ListOfTodos() {
    // Get the todos from the store
    const todos = useAppSelector(state => state.todos)

    const { removeTodo, setIsDone } = useTodoAction()

    return (
        <section>
            <div className='flex justify-between items-center py-2'>
                <h2 className='text-2xl text-sky-500 font-semibold'>
                    List of Todos
                </h2>
                <p>
                    Todos <span className='bg-blue-200 ml-2 border text-blue-800 border-blue-600 px-4 inline-block rounded-2xl text-sm'>{todos.length}</span>
                </p>
            </div>

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3'>
                {todos.map(todo => (
                    <li key={todo.id} className='flex flex-col border rounded-lg p-2 relative border-gray-700'>
                        <h2 className='text-xl font-semibold text-sky-300'>
                            {todo.title}
                        </h2>
                        <p>{todo.description}</p>
                        <p>{todo.targetDate}</p>
                        <div className='flex items-center flex-row-reverse absolute top-2 right-2 gap-2'>
                            <button
                                onClick={() => setIsDone(todo.id, !todo.isDone)}
                                className={todo.isDone ? 'text-green-300 hover:text-green-500 transition-all' : 'text-red-300 hover:text-red-500 transition-all'}
                            >
                                {
                                    todo.isDone ? 'Done' : 'Not Done'
                                }
                            </button>
                        </div>
                        <div className='flex p-2 gap-5'>
                            <NavLink to={`/update-todo/${todo.id}`} className='text-yellow-500 hover:text-yellow-600 transition-all active:scale-110'>
                                <EditIcon />
                            </NavLink>
                            <button
                                onClick={() => removeTodo(todo.id)}
                                className='text-red-500 hover:text-red-600 transition-all active:scale-110'
                            >
                                <TrashIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}