import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.scss";

const TodoForm = ({addTodo}) => {

  const [data, setData] = useState('');
  // const [isComplete, setIsComplete] = useState(false);
 
  const onSubmitHandler = (event)  => {
    event.preventDefault();
    addTodo(data)
    setData('')
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className={styles.inputForm}>
        <input  onChange={(e) => setData(e.target.value)} placeholder="Enter new todo" value={data}></input>
        <Button type="submit" title="submit">Submit</Button>
        
      </form>
       
    </>
  );
};

export default TodoForm;
