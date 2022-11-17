import styles from "./TodosActions.module.scss";
import { FcRefresh, FcDeleteRow } from "react-icons/fc";
import Button from "../UI/Button";

const TodosActions = ({ deleteCompletedTodoHandler, resetTodoHandler, completedTodosExist }) => {
  return (
    <div className={styles.react_icons}>
      <Button
        className={styles.form_button_delete}
        title="Reset Todos"
        onClick={resetTodoHandler}
      >
        <FcRefresh className={styles.react_icon} />
      </Button>
      <Button
        onClick={deleteCompletedTodoHandler}
        className={styles.form_button_complete}
        title="Clear completed todos"
        disabled={!completedTodosExist}
      >
        <FcDeleteRow className={styles.react_icon} />
      </Button>
    </div>
  );
};

export default TodosActions;
