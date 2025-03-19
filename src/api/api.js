import { HTTP_METHOD } from '../constants';

const fetchServer = (method, { id, ...payload } = {}) => {
   let url = 'http://localhost:3006/todos';
   let options = {
      method,
      headers: { 'Content-Type': 'application/json' },
   };

   if (id && method !== HTTP_METHOD.POST) {
      url += `/${id}`;
   }

   if (method !== HTTP_METHOD.GET && method !== HTTP_METHOD.DELETE) {
      options.body = JSON.stringify(payload);
   }

   return fetch(url, options).then((response) => response.json());
};

export const createTodo = (newTodo) => fetchServer(HTTP_METHOD.POST, newTodo);
export const readTodos = () => fetchServer(HTTP_METHOD.GET);
export const updateTodo = (todoData) => fetchServer(HTTP_METHOD.PATCH, todoData);
export const deleteTodo = (todoId) => fetchServer(HTTP_METHOD.DELETE, { id: todoId });
