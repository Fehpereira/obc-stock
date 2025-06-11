import { useContext, useEffect } from 'react';
import ItemsCreate from './ItemsCreate';
import { useParams } from 'react-router-dom';
import Error from '../Utils/Error';
import { DashboardContext } from '../../hooks/DashboardContext';
import styles from './ItemToUpdate.module.css';

const ItemToUpdate = () => {
  const { updateItem, setUpdateItem, items, handleUpdateItem } =
    useContext(DashboardContext);

  if (!updateItem) return <Error />;

  const { idItemUpdate } = useParams();

  useEffect(() => {
    const itemToUpdate = items.find((item) => item.idItem === idItemUpdate);
    setUpdateItem(itemToUpdate);
  }, [idItemUpdate, items]);

  useEffect(() => {
    return () => {
      setUpdateItem({});
    };
  }, []);

  return (
    <ItemsCreate callback={handleUpdateItem}>
      <h2 className={styles.title}>Atualizar Item - {updateItem.nameItem}</h2>
    </ItemsCreate>
  );
};

export default ItemToUpdate;
