import { useState } from "react";
import { TodoList } from "../../organisms/TodoLlist/TodoList";
import { INIT_TODO_LIST } from "../../../constants/data";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
  const [originTodoList] = useState(INIT_TODO_LIST);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <section className={styles.common}>
        {originTodoList.length > 0 && (
          <TodoList todoList={originTodoList} />
        )}
      </section>
    </div>
  );
};
