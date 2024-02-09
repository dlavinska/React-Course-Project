import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import CreateNewOrder from "./pages/CreateNewOrder";
import Order from "./pages/Order";
import PageNotFound from './pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order/new" element={<CreateNewOrder />} />
            <Route path="/order/:id" element={<Order/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
