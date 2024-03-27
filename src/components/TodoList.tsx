import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Todo } from './../types/Todo';
import { addTodo, getAllTodos, updateTodo, deleteTodo } from '../db-operations';
import { TodoItem } from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getAllTodos();
      console.log(todos);
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!input) {
      return;
    }

    // Add todo - både uppdatera listan och vår db
    const newTodo: Todo = {
      id: uuid(),
      text: input,
      completed: false,
    };

    addTodo(); // Spara till backend - Create POST request

    setTodos([...todos, newTodo]); // Uppdatera state

    console.log(todos);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInput(text);
  };

  const onComplete = (id: string) => {
    // Uppdatera en todo från listan i frontend, todos (mappa igenom...och använd spread)
    const newTodos = todos.map((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        updateTodo(todo); // Synka till db för uppdaterade todos
      }
      return todo;
    });
    setTodos(newTodos); // Uppdatera state för todos
  };

//   Continue at row seventy two in Sandra's repo
  const onDelete = (id: string) => { 


}
