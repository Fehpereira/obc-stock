import { useContext, useEffect } from 'react';
import ItemsCreate from './ItemsCreate';
import { useParams } from 'react-router-dom';
import Error from '../Utils/Error';
import { DashboardContext } from '../../hooks/DashboardContext';
import styles from './ItemToUpdate.module.css';

const ItemToUpdate = () => {
  const {
    updateItem,
    setUpdateItem,
    items,
    handleUpdateItem,
    setNameItem,
    setTotal,
    setPrice,
    setCategory,
    setDescription,
  } = useContext(DashboardContext);

  const { idItemUpdate } = useParams();

  useEffect(() => {
    const itemToUpdate = items.find((item) => item.idItem === idItemUpdate);
    if (!itemToUpdate) return;

    setUpdateItem(itemToUpdate);
    setNameItem(itemToUpdate.nameItem);
    setTotal(itemToUpdate.total);
    setPrice(itemToUpdate.price);
    setCategory(itemToUpdate.category);
    setDescription(itemToUpdate.description);
  }, [idItemUpdate, items]);

  useEffect(() => {
    return () => {
      setUpdateItem({});
      setNameItem('');
      setTotal('');
      setPrice('');
      setCategory('');
      setDescription('');
    };
  }, []);

  if (!updateItem) return <Error />;

  return (
    <ItemsCreate callback={handleUpdateItem}>
      <h2 className={styles.title}>Atualizar Item - {updateItem.nameItem}</h2>
    </ItemsCreate>
  );
};

export default ItemToUpdate;
