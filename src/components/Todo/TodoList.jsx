import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.scss";

const TodoList = (props) => {
  const { todos, deleteTodo, toggleTodo } = props;
  // console.log(todos)
  return (
    <div className={styles.todolist_container}>
      {todos.length === 0 ? (
        <h1>Todo list is empty</h1>
      ) : (
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>;
        })
      )}
    </div>
  );
};

export default TodoList;
