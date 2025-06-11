import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const itemsStored = localStorage.getItem('items');
    if (!itemsStored) return [];
    return JSON.parse(itemsStored);
  });
  const [itemsRunningOut, setItemsRunningOut] = useState([]);
  const [recentItems, setRecentItems] = useState([]);
  const [showItem, setShowItem] = useState({});
  const [item, setItem] = useState({});
  const [totalInventory, setTotalInventory] = useState('');
  const [nameItem, setNameItem] = useState('');
  const [total, setTotal] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [updateItem, setUpdateItem] = useState({});
  const navigate = useNavigate();

  function sumTotalItems(listItems) {
    let newTotalInventory;
    if (items.length) {
      newTotalInventory = listItems
        .map((item) => {
          return item.total;
        })
        .reduce((before, current) => {
          return before + current;
        }, 0);

      return newTotalInventory;
    } else {
      newTotalInventory = 0;
      return newTotalInventory;
    }
  }

  function createItem() {
    if (
      nameItem.trim() !== '' &&
      total &&
      price > 0 &&
      category !== '' &&
      description.trim() !== ''
    ) {
      let updateItems = [...items];
      const newItem = {
        idItem: uuidv4(),
        nameItem,
        total,
        price,
        category,
        description,
        createdAt: new Date().toLocaleString(),
      };

      if (!updateItems.includes(newItem)) updateItems.push(newItem);
      setItem(newItem);
      if (updateItems.length) {
        localStorage.setItem('items', JSON.stringify(updateItems));
        setItems(updateItems);
        clearValues(
          setNameItem,
          setTotal,
          setPrice,
          setCategory,
          setDescription,
        );
      }
      navigate('/');
    }
  }

  function clearValues(...args) {
    args.forEach((arg) => {
      arg('');
    });
  }

  function handleUpdateItem() {
    if (nameItem.trim() !== '' && total && price > 0 && category !== '') {
      let itemsToUpdate = [...items];
      const itemUpdated = {
        idItem: updateItem.idItem,
        nameItem,
        total,
        price,
        category,
        description,
        createdAt: updateItem.createdAt,
        updatedAt: new Date().toLocaleString(),
      };

      const indexToUpdate = items.findIndex(
        (item) => item.idItem === updateItem.idItem,
      );
      itemsToUpdate[indexToUpdate] = itemUpdated;

      setItems(itemsToUpdate);
      clearValues(setNameItem, setTotal, setPrice, setCategory, setDescription);
      localStorage.setItem('items', JSON.stringify(itemsToUpdate));

      navigate('/');
    }
  }

  useEffect(() => {
    if (items.length > 0) {
      setTotalInventory(sumTotalItems(items));

      const runningOutList = items.filter((item) => item.total < 10);
      setItemsRunningOut(runningOutList);
      if (items.length >= 3) {
        setRecentItems([
          items[items.length - 1],
          items[items.length - 2],
          items[items.length - 3],
        ]);
      } else if (items.length >= 2) {
        setRecentItems([items[items.length - 1], items[items.length - 2]]);
      } else if (items.length >= 1) {
        setRecentItems([items[0]]);
      }
    }
    if (!items.length) {
      setRecentItems([]);
      setTotalInventory(0);
      setItemsRunningOut([]);
    }
  }, [items]);

  return (
    <DashboardContext.Provider
      value={{
        items,
        setItems,
        itemsRunningOut,
        setItemsRunningOut,
        recentItems,
        setRecentItems,
        totalInventory,
        showItem,
        setShowItem,
        item,
        setItem,
        nameItem,
        setNameItem,
        total,
        setTotal,
        price,
        setPrice,
        category,
        setCategory,
        createItem,
        setUpdateItem,
        updateItem,
        handleUpdateItem,
        description,
        setDescription,
        clearValues,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
