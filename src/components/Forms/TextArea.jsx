import styles from './Textarea.module.css';

const TextArea = ({ inputId, label, value, onChange, ...props }) => {
  return (
    <>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <textarea
        className={styles.textarea}
        id={inputId}
        onChange={onChange}
        value={value}
        required
        {...props}
      />
    </>
  );
};

export default TextArea;
