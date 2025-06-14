import { useContext } from 'react';
import styles from './DeleteButton.module.css';
import { DashboardContext } from '../../hooks/DashboardContext';
import { useNavigate } from 'react-router-dom';

const DeleteButton = ({
  children = 'Excluir',
  idItemToDelete,
  idItem = '',
}) => {
  const { items, setItems } = useContext(DashboardContext);
  const navigate = useNavigate();

  function deleteItem(idItemToDelete) {
    const itemToDelete = items.find(item => item.idItem === idItemToDelete)
    const option = confirm(`Tem certeza que deseja excluir o item: ${itemToDelete.nameItem}`)
    if (option) {
      const newListItems = items.filter((item) => item.idItem !== idItemToDelete);
      setItems(newListItems);
      localStorage.setItem('items', JSON.stringify(newListItems));
      idItem && navigate('/');
    }
  }

  return (
    <>
      <button
        className={styles.delete}
        onClick={() => {
          deleteItem(idItemToDelete);
        }}
      >
        {children}
      </button>
    </>
  );
};

export default DeleteButton;
