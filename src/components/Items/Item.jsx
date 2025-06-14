import { useContext, useEffect } from 'react';
import { DashboardContext } from '../../hooks/DashboardContext';
import { useParams } from 'react-router-dom';
import Error from '../Utils/Error';
import Items from './Items';
import UpdateButton from '../Buttons/UpdateButton';
import DeleteButton from '../Buttons/DeleteButton';
import styles from './Item.module.css';

const Item = () => {
  const { showItem, setShowItem, items } = useContext(DashboardContext);

  const { idItem } = useParams();

  useEffect(() => {
    const itemToShow = items.find((item) => item.idItem === idItem);
    setShowItem(itemToShow);
  }, [idItem, items]);

  useEffect(() => {
    return () => {
      setShowItem({});
    };
  }, []);

  if (!showItem) return <Error />;

  const {
    nameItem,
    total,
    price,
    category,
    description,
    createdAt,
    updatedAt,
  } = showItem;

  return (
    <>
      <Items>
        <hr />
        <div className={styles.container}>
          <div className={styles.headerItem}>
            <h2 className={styles.title}>{nameItem}</h2>
            <UpdateButton idItemUpdate={idItem}></UpdateButton>
            <DeleteButton
              idItemToDelete={idItem}
              idItem={idItem}
            ></DeleteButton>
          </div>
          <div className={styles.dataWrapper}>
            <span className={styles.data}>Categoria: {category}</span>
            <span className={styles.data}>Quantidade em estoque: {total}</span>
            <span className={styles.data}>Preço: R$ {price}</span>
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>{description}</p>
            <span>Cadastrado em: {createdAt}</span>
            {updatedAt && <span>Atualizado em: {updatedAt}</span>}
          </div>
        </div>
      </Items>
    </>
  );
};

export default Item;
