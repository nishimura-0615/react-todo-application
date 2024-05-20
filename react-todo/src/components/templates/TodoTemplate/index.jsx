import { useState,useMemo } from "react";
import { InputForm } from "../../atoms/InputForm";
import { TodoList } from "../../organisms/TodoLlist";
import { AddTodo } from "../../organisms/AddTodo";
import { INIT_TODO_LIST,INIT_UNIQUE_ID } from "../../../constants/data";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [addInputValue, setAddInputValue] = useState("");
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  const showTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      const regexp = new RegExp("^" + searchKeyword, "i");
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;
      const newTodoList = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      setOriginTodoList(newTodoList);

      setUniqueId(nextUniqueId);

      setAddInputValue("");
    }
  };

  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);

      setOriginTodoList(newTodoList);
    }
  };

  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

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
          placeholder={"Search Keyword"}
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
