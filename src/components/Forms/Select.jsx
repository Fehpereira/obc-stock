import styles from './Select.module.css';

const Select = ({ setValue, value, ...props }) => {
  return (
    <select
      className={styles.select}
      required
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option value="" disabled>
        Selecione uma categoria
      </option>
      <option value="Jogos">Jogos</option>
      <option value="Livros">Livros</option>
    </select>
  );
};

export default Select;
