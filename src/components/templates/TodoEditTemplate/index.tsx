'use client';

import styles from './styles.module.css';
import { useTodoEditTemplate } from './useTodoEditTemplate';
import { useTodosContext } from '../../../contexts/TodoContext';
import { CommonButton } from '../../atoms/CommonButton';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { BaseLayout } from '../../organisms/BaseLayout';

export const TodoEditTemplate = () => {
  const { originTodoList, updateTodo } = useTodosContext();

  const [
    { inputContent, inputTitle, todo },
    { handleChangeContent, handleChangeTitle, handleUpdateTodo },
  ] = useTodoEditTemplate({ originTodoList, updateTodo });

  return (
    <BaseLayout title={'TodoEdit'}>
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div className={styles.area}>
            <InputForm
              value={inputTitle}
              placeholder={'Title'}
              onChange={handleChangeTitle}
            />
          </div>
          <div className={styles.area}>
            <TextArea
              value={inputContent}
              placeholder={'Content'}
              onChange={handleChangeContent}
            />
          </div>
          <div className={styles.area}>
            <CommonButton type="submit" title="Edit Todo" />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};
