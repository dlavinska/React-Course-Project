import './App.css';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import { Routes, Route } from 'react-router-dom';
const LoginLazy = lazy(() => import('./pages/Login'));
const MenuLazy = lazy(() => import('./pages/Menu'));
const CartLazy = lazy(() => import('./pages/Cart'));
const CreateNewOrderLazy = lazy(() => import('./pages/CreateNewOrder'));
const OrderLazy = lazy(() => import('./pages/Order'));
const PageNotFoundLazy = lazy(() => import('./pages/PageNotFound'));

function App() {
  return (
    <div className="App grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<LoginLazy />} />
              <Route path="/menu" element={<MenuLazy />} />
              <Route path="/cart" element={<CartLazy />} />
              <Route path="/order/new" element={<CreateNewOrderLazy />} />
              <Route path="/order/:id" element={<OrderLazy />} />
              <Route path="*" element={<PageNotFoundLazy />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
