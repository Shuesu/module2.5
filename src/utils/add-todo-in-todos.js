import { NEW_TODO_ID } from '../constants'

export const AddTodoInTodos = (todos) => [
   { id: NEW_TODO_ID, title: '', completed: false, isEditing: true },
   ...todos,
]