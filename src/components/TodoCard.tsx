import React from 'react'
import { NavLink } from 'react-router-dom'
import { TodoWithId } from '../redux/types/types'
import { EditIcon } from './icons/EditIcons'
import { TrashIcon } from './icons/TrashIcon'

export { type TodoWithId } from '../redux/types/types'

export function TodoCard({ todo, actionClick, editLink }: React.PropsWithChildren<{ todo: TodoWithId, actionClick: () => void, editLink: string }>) {
    return (
        <li className='flex flex-col border rounded-lg p-2 relative border-gray-700'>
            <h2 className='text-xl font-semibold text-sky-300'>
                {todo.title}
            </h2>
            <p>{todo.description}</p>
            <p>{todo.targetDate}</p>
            <div className='flex items-center flex-row-reverse absolute top-2 right-2 gap-2'>
                <button
                    onClick={() => { }}
                    className={todo.isDone ? 'text-green-300 hover:text-green-500 transition-all' : 'text-red-300 hover:text-red-500 transition-all'}
                >
                    {
                        todo.isDone ? 'Done' : 'Not Done'
                    }
                </button>
            </div>
            <div className='flex p-2 gap-5'>
                <NavLink to={editLink} className='text-yellow-500 hover:text-yellow-600 transition-all active:scale-110'>
                    <EditIcon />
                </NavLink>
                <button
                    onClick={actionClick}
                    className='text-red-500 hover:text-red-600 transition-all active:scale-110'
                >
                    <TrashIcon />
                </button>
            </div>
        </li>
    )
}