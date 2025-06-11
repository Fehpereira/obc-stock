import styles from './Input.module.css';

const Input = ({ inputId, label, type, value, onChange, ...props }) => {
  return (
    <>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={inputId}
        onChange={onChange}
        value={value}
        {...props}
      />
    </>
  );
};

export default Input;
