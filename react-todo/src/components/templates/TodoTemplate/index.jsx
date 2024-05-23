import styles from './styles.module.css';
import { useTodosContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { AddTodo } from '../../organisms/AddTodo';
import { TodoList } from '../../organisms/TodoLlist';

export const TodoTemplate = () => {
  const {
    addInputValue,
    handleAddTodo,
    handleChangeSearchKeyword,
    handleDeleteTodo,
    onChangeAddInputValue,
    searchKeyword,
    showTodoList,
  } = useTodosContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>

      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          onChangeTodo={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        />
      </section>

      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder={'Search Keyword'}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
