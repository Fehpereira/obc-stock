import { useContext } from 'react';
import DashboardShowData from './DashboardShowData';
import { DashboardContext } from '../../hooks/DashboardContext';
import DashboardTable from './DashboardTable';
import styles from './DashboardHome.module.css';
import Footer from '../Utils/Footer';
import Header from '../Utils/Header';

const DashboardHome = () => {
  const { items, itemsRunningOut, recentItems, totalInventory } =
    useContext(DashboardContext);

  return (
    <>
      <Header title={'Dashboard'} />
      <section className={`${styles.dashboard} container`}>
        <DashboardShowData
          reference={'Diversidade de itens'}
          total={items.length}
        />
        <DashboardShowData
          reference={'Inventário total'}
          total={totalInventory}
        />
        <DashboardShowData
          reference={'Itens recentes'}
          total={recentItems.length}
        />
        <DashboardShowData
          reference={'Itens acabando'}
          total={itemsRunningOut.length}
        />

        <DashboardTable title={'Itens recentes'} itemsShow={recentItems} />
        <DashboardTable title={'Itens acabando'} itemsShow={itemsRunningOut} />
      </section>
      <Footer />
    </>
  );
};

export default DashboardHome;
