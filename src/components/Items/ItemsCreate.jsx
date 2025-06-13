import { useContext, useEffect } from 'react';
import Input from '../Forms/Input';
import Items from './Items';
import { DashboardContext } from '../../hooks/DashboardContext';
import Select from '../Forms/Select';
import styles from './ItemsCreate.module.css';
import TextArea from '../Forms/TextArea';

const ItemsCreate = ({ callback, children }) => {
  const textRegex = /^[\w\sÀ-ÿ]*$/;
  const numberRegex = /^\d*$/;
  const areaRegex = /^[a-zA-Z0-9\s:./?!-]*$/;

  const {
    nameItem,
    setNameItem,
    total,
    setTotal,
    price,
    setPrice,
    category,
    setCategory,
    createItem,
    description,
    setDescription,
    clearValues,
  } = useContext(DashboardContext);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleClick() {
    callback ? callback() : createItem();
  }

  useEffect(() => {
    return () => {
      clearValues(setNameItem, setTotal, setPrice, setCategory, setDescription);
    };
  }, []);

  return (
    <Items>
      <section className={`container`}>
        <hr />
        {children}
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            inputId={'name'}
            label={'Nome'}
            onChange={({ target }) => {
              if (textRegex.test(target.value)) setNameItem(target.value);
            }}
            value={nameItem}
            type={'text'}
            required
          />
          <Input
            inputId={'quantity'}
            label={'Quantidade'}
            onChange={({ target }) => {
              if (numberRegex.test(target.value)) setTotal(+target.value);
            }}
            value={total}
            type={'text'}
            required
          />
          <Input
            inputId={'price'}
            label={'Preço'}
            onChange={({ target }) => {
              if (numberRegex.test(target.value)) setPrice(+target.value);
            }}
            value={price}
            type={'text'}
            required
          />
          <Select setValue={setCategory} value={category} />
          <TextArea
            inputId={'description'}
            label={'Descrição'}
            value={description}
            onChange={({ target }) => {
              if (areaRegex.test(target.value)) setDescription(target.value);
            }}
          />
          <button
            type="submit"
            onClick={handleClick}
            className={styles.btnSave}
          >
            Salvar
          </button>
        </form>
      </section>
    </Items>
  );
};

export default ItemsCreate;
