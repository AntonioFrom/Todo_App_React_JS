import styles from "./Todo.module.scss";
import { FcTodoList, FcDeleteRow, FcApprove } from "react-icons/fc";
import React from "react";

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className={`${styles.todo_item} ${todo.isCompleted ? styles.completedTodo : ''}`}
     >
      <FcTodoList className={styles.react_icons} />
      {todo.text}
      <FcDeleteRow onClick={()=> deleteTodo(todo.id)} className={styles.react_icons_left} />
      <FcApprove onClick={()=> toggleTodo(todo.id)} className={styles.react_icons_left} />
    </div>
  );
};

export default Todo;
