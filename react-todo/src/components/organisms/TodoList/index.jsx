import {
  faFile,
  faPenToSquare,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './styles.module.css';
import { useTodoList } from './useTodoList';

export const TodoList = ({ todoList, handleDeleteTodo }) => {
  const { handleMoveDetailPage, handleMoveEditPage } = useTodoList();

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} className={styles.todo}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.area}>
            <div className={styles.far}>
              <FontAwesomeIcon
                icon={faFile}
                size="lg"
                onClick={() => handleMoveDetailPage(todo.id)}
              />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="lg"
                onClick={() => handleMoveEditPage(todo.id)}
              />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="lg"
                onClick={() => handleDeleteTodo(todo.id, todo.title)}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
