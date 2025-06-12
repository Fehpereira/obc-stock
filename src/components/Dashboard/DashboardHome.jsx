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
          timing={items.length > 15 ? 200 : 300}
        />
        <DashboardShowData
          reference={'Inventário total'}
          total={totalInventory}
          timing={45}
        />
        <DashboardShowData
          reference={'Itens recentes'}
          total={recentItems.length}
          timing={525}
        />
        <DashboardShowData
          reference={'Itens acabando'}
          total={itemsRunningOut.length}
          timing={550}
        />

        <DashboardTable title={'Itens recentes'} itemsShow={recentItems} />
        <DashboardTable title={'Itens acabando'} itemsShow={itemsRunningOut} />
      </section>
      <Footer />
    </>
  );
};

export default DashboardHome;
