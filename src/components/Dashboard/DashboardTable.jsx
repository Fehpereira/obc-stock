import { useContext } from 'react';
import DeleteButton from '../Buttons/DeleteButton';
import ShowButton from '../Buttons/ShowButton';
import UpdateButton from '../Buttons/UpdateButton';
import styles from './DashboardTable.module.css';
import { DashboardContext } from '../../hooks/DashboardContext';

const DashboardTable = ({ title, itemsShow }) => {
  const { items } = useContext(DashboardContext);
  const titleIsId = title.toLowerCase() === 'ID'.toLowerCase();
  const titleIsRunningOut =
    title.toLowerCase() === 'Itens acabando'.toLowerCase();
  const marginInlineAuto = {
    marginInline: 'auto',
  };

  return (
    <div
      className={
        title.toLowerCase() === 'Itens recentes'.toLowerCase()
          ? styles.recents
          : styles.runningOut
      }
      style={titleIsId ? { marginTop: '1rem' } : { margin: '0' }}
    >
      <header
        className={styles.header}
        style={
          titleIsId
            ? {
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
              }
            : { display: 'grid' }
        }
      >
        <h2>{title}</h2>
        {titleIsId && <strong>Nome</strong>}

        {titleIsRunningOut && <strong>Qtd.</strong>}
        {titleIsId && <strong>Em estoque</strong>}

        {title.toLowerCase() === 'ID'.toLowerCase() && (
          <strong>Categoria</strong>
        )}
        <strong style={titleIsId ? { margin: '0' } : { margin: 'auto' }}>
          Ações
        </strong>
      </header>
      <div>
        {titleIsId
          ? items.map(({ idItem, nameItem, total, category }) => {
              return (
                <div
                  className={styles.item}
                  key={idItem}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                  }}
                >
                  <p style={marginInlineAuto}>{idItem}</p>
                  <p>{nameItem}</p>

                  <p style={marginInlineAuto}>{total} unid.</p>
                  <p style={marginInlineAuto}>{category}</p>

                  <div className={styles.buttonsWrapper}>
                    <ShowButton
                      idItemShow={idItem}
                      style={{
                        backgroundColor: '#58A7FF',
                      }}
                    >
                      Ver
                    </ShowButton>

                    <UpdateButton idItemUpdate={idItem}>
                      {'Atualizar'}
                    </UpdateButton>
                    <DeleteButton idItemToDelete={idItem}>
                      {'Remover'}
                    </DeleteButton>
                  </div>
                </div>
              );
            })
          : itemsShow.map(({ idItem, nameItem }) => {
              return (
                <div
                  className={styles.item}
                  key={idItem}
                  style={{ display: 'grid' }}
                >
                  <p>{nameItem}</p>
                  {title.toLowerCase() === 'Itens acabando'.toLowerCase() ? (
                    <p>{}</p>
                  ) : null}
                  <div className={styles.buttonsWrapper}>
                    <ShowButton
                      idItemShow={idItem}
                      style={{ backgroundColor: 'white' }}
                    >
                      Ver
                    </ShowButton>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default DashboardTable;
