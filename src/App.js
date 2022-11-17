import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';
import { v4 as uuidv4 } from 'uuid';
import TodosActions from './components/Todo/TodosActions';

function App() {

  const [todos, setTodos] = useState([])
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length



  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    // console.log(newTodo)
    setTodos([...todos, newTodo])
  }
  const resetTodoHandler = () => {
    setTodos([])
  }


  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const toggleTodoHandler = (id) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
    }))

  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && <TodosActions completedTodosExist={!!completedTodosCount} resetTodoHandler={resetTodoHandler} deleteCompletedTodoHandler={deleteCompletedTodoHandler} />}

      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
      {completedTodosCount > 0 && <h2>{`You have completes ${completedTodosCount} ${completedTodosCount>1 ? 'todos': 'todo'}`}</h2>}
    </div>
  );
}

export default App;
