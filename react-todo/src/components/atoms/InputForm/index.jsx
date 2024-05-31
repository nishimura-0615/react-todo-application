import styles from './style.module.css';

export const InputForm = (props) => {
  return (
    <input
      disabled={props.disabled}
      className={styles.input}
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};
