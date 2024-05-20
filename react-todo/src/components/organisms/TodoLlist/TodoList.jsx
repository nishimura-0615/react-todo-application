import styles from "./style.module.css";

export const TodoList = (props) => {
  const { todoList} = props;

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} className={styles.todo}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.far}>
          </div>
        </li>
      ))}
    </ul>
  );
};
