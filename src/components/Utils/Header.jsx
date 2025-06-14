import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ title }) => {
  return (
    <header className={`${styles.headerFixed} container`}>
      <h2>React Stock</h2>
      <h1>{title}</h1>
      <div className={styles.links}>
        <NavLink
          to="/items/all"
          end
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Itens
        </NavLink>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Ínicio
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
