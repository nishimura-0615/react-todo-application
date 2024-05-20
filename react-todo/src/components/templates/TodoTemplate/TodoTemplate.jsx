import { useState,useMemo } from "react";
import { InputForm } from "../../atoms/InputForm/InputForm";
import { TodoList } from "../../organisms/TodoLlist/TodoList";
import { INIT_TODO_LIST } from "../../../constants/data";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
  const [originTodoList] = useState(INIT_TODO_LIST);
  const [searchKeyword, setSearchKeyword] = useState("");

  const showTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      const regexp = new RegExp("^" + searchKeyword, "i");
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>

      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder={"Search Keyword"}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      <section className={styles.common}>
        {originTodoList.length > 0 && (
         <TodoList todoList={showTodoList} />
        )}
      </section>
    </div>
  );
};

export default TodoTemplate;
