// db-operations.ts
import axios from 'axios';
import { useReducer } from 'react';
import type { Todo } from './types/Todo';

// Define action types
const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  GET_ALL_TODOS: 'GET_ALL_TODOS',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case ActionTypes.GET_ALL_TODOS:
      return { ...state, todos: action.payload };
    case ActionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

// Initial state
const initialState = {
  todos: [],
};

// Hook to manage todos state using useReducer
export const useTodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action creators
  const addTodo = async (todo: Todo) => {
    const response = await axios.post('http://localhost:3000/todos', todo);
    dispatch({ type: ActionTypes.ADD_TODO, payload: response.data });
  };

  const getAllTodos = async () => {
    const response = await axios.get('http://localhost:3000/todos');
    dispatch({ type: ActionTypes.GET_ALL_TODOS, payload: response.data });
    return response.data; // Return the todos for use in useEffect
  };

  const updateTodo = async (todo: Todo) => {
    const response = await axios.put(
      `http://localhost:3000/todos/${todo.id}`,
      todo
    );
    dispatch({ type: ActionTypes.UPDATE_TODO, payload: response.data });
  };

  const deleteTodo = async (id: string) => {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    dispatch({ type: ActionTypes.DELETE_TODO, payload: id });
  };

  return { state, addTodo, getAllTodos, updateTodo, deleteTodo };
};
