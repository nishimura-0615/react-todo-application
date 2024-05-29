import styles from './style.module.css';

export const InputForm = (props) => {
  const { disabled = false, value, placeholder, onChange, onKeyDown } = props;

  return (
    <input
      disabled={disabled}
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
