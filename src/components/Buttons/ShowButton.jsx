import styles from './ShowButton.module.css';
import { Link } from 'react-router-dom';

const ShowButton = ({ children, idItemShow, ...props }) => {
  return (
    <Link to={`/item/${idItemShow}`} className={styles.show}>
      <button className={styles.show} {...props}>
        {children}
      </button>
    </Link>
  );
};

export default ShowButton;
