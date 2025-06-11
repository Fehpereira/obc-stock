import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardHome from './components/Dashboard/DashboardHome';
import { DashboardProvider } from './hooks/DashboardContext';
import Error from './components/Utils/Error';
import ItemsCreate from './components/Items/ItemsCreate';
import ItemsAll from './components/Items/ItemsAll';
import Item from './components/Items/Item';
import ItemToUpdate from './components/Items/ItemToUpdate';

const App = () => {
  return (
    <BrowserRouter>
      <DashboardProvider>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="items/new" element={<ItemsCreate />} />
          <Route path="items/all" element={<ItemsAll />} />
          <Route path="item/:idItem" element={<Item />} />
          <Route path="item/update/:idItemUpdate" element={<ItemToUpdate />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DashboardProvider>
    </BrowserRouter>
  );
};

export default App;
