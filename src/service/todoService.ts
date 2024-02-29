// todoService.ts
import { Tarea } from '../types/Tarea';

const todosFilePath = 'todo.json';

export const getTodos = (): Tarea[] => {
  try {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : fetchDefaultTodos();
  } catch (error) {
    console.error('Error al leer los datos:', error);
    return fetchDefaultTodos();
  }
};

export const setTodos = (todos: Tarea[]): void => {
  try {
    const data = JSON.stringify(todos, null, 2);
    localStorage.setItem('todos', data);
  } catch (error) {
    console.error('Error al escribir en los datos:', error);
  }
};

const fetchDefaultTodos = (): Tarea[] => [
  {
    id: 1,
    title: 'Hacer la compra',
    complete: false,
  },
  {
    id: 2,
    title: 'Estudiar para el examen',
    complete: true,
  },
  {
    id: 3,
    title: 'Hacer ejercicio',
    complete: false,
  },
  // Agrega más tareas según sea necesario
];

export const addTodo = (newTodo: Tarea): Tarea[] => {
  const todos = getTodos();
  const updatedTodos = [...todos, newTodo];
  setTodos(updatedTodos);
  return updatedTodos;
};

export const deleteTodo = (id: number): Tarea[] => {
  const todos = getTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
  return updatedTodos;
};
