import Items from './Items';
import DashboardTable from '../Dashboard/DashboardTable';
import { useContext } from 'react';
import { DashboardContext } from '../../hooks/DashboardContext';
import { Link } from 'react-router-dom';

const ItemsAll = () => {
  const { items } = useContext(DashboardContext);

  return (
    <Items>
      <section
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {items.length ? (
          <DashboardTable title={'ID'} />
        ) : (
          <>
            <hr style={{ width: '100%' }} />
            <h2 className="empty">A lista está vazia!</h2>
            <Link to={'/items/new'}>
              Clique aqui para adicionar um novo item na lista
            </Link>
          </>
        )}
      </section>
    </Items>
  );
};

export default ItemsAll;
