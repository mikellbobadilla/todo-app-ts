import { useNavigate } from 'react-router-dom'
import { InputText } from '../components/InputText'
import { TodoForm } from '../components/TodoForm'
import { useTodoAction } from '../hooks/useTodoAction'

export function CreateTodo() {

    const navigate = useNavigate()
    const { addTodo } = useTodoAction()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const title = formData.get('title') as string
        const description = formData.get('description') as string
        const targetDate = formData.get('targetDate') as string
        addTodo({ title, description, targetDate, isDone: false })
        event.currentTarget.reset()
        navigate('/todos')
    }

    return (
        <section>
            <h2 className='text-2xl text-sky-500 font-semibold'>
                Create Todo
            </h2>
            <TodoForm className='mt-3' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <InputText type='text' name='title' placeholder='Title' />
                    <InputText type='text' name='description' placeholder='Description' />
                    <InputText type='date' name='targetDate' placeholder='Target Date' />
                </div>
                <button
                    type='submit'
                    className='bg-sky-500 text-white rounded-lg p-2 mt-3 hover:bg-sky-600 transition-all'
                >
                    Create
                </button>
            </TodoForm>
        </section>
    )
}