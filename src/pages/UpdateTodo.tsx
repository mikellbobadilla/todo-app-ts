import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { InputText } from '../components/InputText'
import { TodoForm } from '../components/TodoForm'
import { useAppSelector } from '../hooks/store'
import { useTodoAction } from '../hooks/useTodoAction'
import { TodoWithId } from '../store/todos/slice'

export function UpdateTodo() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<TodoWithId>({ id: '', title: '', description: '', targetDate: '', isDone: false })
    const { updateTodo } = useTodoAction()
    const todos = useAppSelector(state => state.todos)

    useEffect(() => {

        const prevTodo = todos.find(todo => todo.id === id)
        if (prevTodo && id) {
            setTodo(prevTodo)
        }

    }, [id, todos])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const title = formData.get('title') as string
        const description = formData.get('description') as string
        const targetDate = formData.get('targetDate') as string
        updateTodo(todo?.id ?? '', { title, description, targetDate, isDone: todo?.isDone || false })
        navigate('/todos')
    }

    return (
        <section>
            <h2 className='text-2xl text-sky-500 font-semibold'>
                Update Todo
            </h2>
            <TodoForm className='mt-3' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <InputText
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={todo?.title}
                        onChange={(event) => setTodo({ ...todo, title: event.target.value })}
                    />
                    <InputText
                        type='text'
                        name='description'
                        placeholder='Description'
                        value={todo?.description}
                        onChange={event => setTodo({ ...todo, description: event.target.value })}
                    />
                    <InputText
                        type='date'
                        name='targetDate'
                        placeholder='Target Date' value={todo?.targetDate} onChange={event => setTodo({ ...todo, targetDate: event.target.value })}
                    />
                </div>
                <button
                    type='submit'
                    className='bg-sky-500 text-white rounded-lg p-2 mt-3 hover:bg-sky-600 transition-all'
                >
                    Update
                </button>
            </TodoForm>
        </section>
    )
}