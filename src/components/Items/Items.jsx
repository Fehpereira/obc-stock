import Header from '../Utils/Header';
import Footer from '../Utils/Footer';
import { NavLink } from 'react-router-dom';
import styles from './Items.module.css';

const Items = ({ children }) => {
  return (
    <>
      <Header title={'Stock Items'} />
      <div className="container">
        <NavLink
          to="/items/all"
          end
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.links}` : styles.links
          }
        >
          Todos os itens
        </NavLink>
        <NavLink
          end
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.links}` : styles.links
          }
          to={'/items/new'}
        >
          Novo item
        </NavLink>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Items;
