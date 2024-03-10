import { Todo, TodoId, createTodo, deleteTodoById, updateSetIsDone, updateTodoById } from '../store/todos/slice'
import { useAppDispatch } from './store'

export function useTodoAction() {

    const dispatch = useAppDispatch()

    const removeTodo = (id: TodoId) => {
        dispatch(deleteTodoById(id))
    }

    const addTodo = (todo: Todo) => {
        dispatch(createTodo(todo))
    }

    const setIsDone = (id: TodoId, isDone: boolean) => {
        dispatch(updateSetIsDone({ id, isDone }))
    }

    const updateTodo = (id: TodoId, todo: Todo) => {
        dispatch(updateTodoById({ id, todo }))
    }



    return { removeTodo, addTodo, setIsDone, updateTodo }
}