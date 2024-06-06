'use client';

import styles from './styles.module.css';
import { useTodoCreateTemplate } from './useTodoCreateTemplate';
import { useTodosContext } from '../../../contexts/TodoContext';
import { CommonButton } from '../../atoms/CommonButton';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import { BaseLayout } from '../../organisms/BaseLayout';

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodosContext();
  const [
    { inputContent, inputTitle },
    { handleChangeContent, handleChangeTitle, handleCreateTodo },
  ] = useTodoCreateTemplate({ addTodo });

  return (
    <BaseLayout title={'Create Todo'}>
      <form className={styles.container} onSubmit={handleCreateTodo}>
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
          <CommonButton type="submit" title="Create Todo" />
        </div>
      </form>
    </BaseLayout>
  );
};
