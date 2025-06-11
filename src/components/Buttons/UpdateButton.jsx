import { Link } from 'react-router-dom';
import styles from './UpdateButton.module.css';

const UpdateButton = ({ children = 'Atualizar', idItemUpdate }) => {
  return (
    <Link to={`/item/update/${idItemUpdate}`}>
      <button className={styles.update}>{children}</button>
    </Link>
  );
};

export default UpdateButton;
