import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Todo } from './../types/Todo';
import { useTodoReducer } from '../db-operations';
import TodoItem from './TodoItem';

function TodoList() {
  const { state, addTodo, getAllTodos, updateTodo, deleteTodo } =
    useTodoReducer();

  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getAllTodos();
      console.log(todos);
    };
    fetchTodos();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!input) {
      return;
    }

    const newTodo: Todo = {
      id: uuid(),
      text: input,
      completed: false,
    };

    await addTodo(newTodo); // Updated to await

    setInput(''); // Clear input after adding todo
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInput(text);
  };

  const onComplete = (id: string) => {
    const updatedTodo = state.todos.find((todo) => todo.id === id);
    if (updatedTodo) {
      updatedTodo.completed = !updatedTodo.completed;
      updateTodo(updatedTodo); // Updated to pass todo object directly
    }
  };

  const onDelete = (id: string) => {
    deleteTodo(id);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add a todo'
          value={input}
          onChange={handleChange}
        />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {state.todos.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
