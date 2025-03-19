import { useEffect, useState } from 'react'
import styles from './app.module.css'
import { Todo, ControlPanel } from './components'
import { createTodo, readTodos, updateTodo, deleteTodo } from './api'
import { AddTodoInTodos, findTodo, setTodoInTodos, removeTodoInTodos } from './utils'
import { NEW_TODO_ID } from './constants'

export const App = () => {
	const [todos, setTodos] = useState([]);

	const onTodoAdd = () => {
		setTodos(AddTodoInTodos(todos));
	}

	const onTodoSave = (todoId) => {
		const { title, completed } = findTodo(todos, todoId) || {};

		if (todoId === NEW_TODO_ID) {
			createTodo({ title, completed }).then(({ id }) => {
				setTodos(setTodoInTodos(todos, { id, isEditing: false }));
			});
		} else {
			updateTodo({ id: todoId, title }).then(() => {
				setTodos(setTodoInTodos(todos, { id: todoId, isEditing: false }));
			});
		}
	};

	const onTodoEdit = (id) => {
		setTodos(setTodoInTodos(todos, { id, isEditing: true }));
	};

	const onTodoTitleChange = (id, newTitle) => {
		setTodos(setTodoInTodos(todos, { id, title: newTitle }));
	};

	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => setTodos(removeTodoInTodos(todos, id)));
	};

	useEffect(() => {
		readTodos().then((loadedTodos) => setTodos(loadedTodos).reverse());
	}, [])

	return (
		<div className={styles.app}>
			<ControlPanel onTodoAdd={onTodoAdd} />
			<div>
				{todos.map(({ id, title, completed, isEditing = false }) => (
					<Todo
						key={id}
						id={id}
						title={title}
						completed={completed}
						isEditing={isEditing}
						onEdit={() => onTodoEdit(id)}
						onTitleChange={(newTitle) => onTodoTitleChange(id, newTitle)}
						onCompletedChange={(newCompleted) => onTodoCompletedChange(id, newCompleted)}
						onSave={() => onTodoSave(id)}
						onRemove={() => onTodoRemove(id)}
					/>
				))}
			</div>
		</div>
	);
};
