import { useAppSelector } from '../hooks/store'
import { CheckIcon } from './icons/CheckIcon'
import { CloseIcon } from './icons/CloseIcon'
import { EditIcon } from './icons/EditIcons'
import { TrashIcon } from './icons/TrashIcon'

export function ListOfTodos() {
    // Get the todos from the store
    const todos = useAppSelector(state => state.todos)

    return (
        <section>
            <h1 className='text-3xl text-center mt-3 text-cyan-500 font-bold'>
                List of Todos
            </h1>

            <ul className='grid grid-cols-1 gap-2 p-3 mt-3'>
                {todos.map(todo => (
                    <li key={todo.id} className={`flex flex-col border rounded-lg p-2 relative ${todo.isDone ? 'border-gray-400/50' : 'border-red-400/40'}`}>
                        <h2 className='text-xl font-semibold'>
                            {todo.title}
                        </h2>
                        <p>{todo.description}</p>
                        <p>{todo.targetDate}</p>
                        <div className='flex items-center flex-row-reverse absolute top-2 right-2 gap-2'>
                            <button className={`p-1 ${todo.isDone ? 'text-red-300' : 'text-green-300'}`}>
                                {todo.isDone ? <CloseIcon className='size-6' /> : <CheckIcon className='size-6' />}
                            </button>
                        </div>
                        <div className='flex p-2 gap-5'>
                            <button className='text-yellow-500 hover:text-yellow-600 transition-all active:scale-110'>
                                <EditIcon />
                            </button>
                            <button className='text-red-500 hover:text-red-600 transition-all active:scale-110'>
                                <TrashIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}