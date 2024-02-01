import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserInfoContext';
import { clearCart } from '../redux/slices/cartSlice';
import CartItem from '../components/CartItem';
import EmptyCart from '../components/EmptyCart';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleOrder = () => {
    navigate("/order/new");
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  if (!items.length) {
    return <EmptyCart/>
  }

  return (
    <div className="px-4 py-3">
      <button
        onClick={() => navigate("/menu")}
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </button>
      <h2 className="mt-7 text-xl font-semibold">
        Your cart, {user.username}
      </h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {items.map((el) => (
          <CartItem key={el.id} item={el} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <button
          onClick={handleOrder}
          className="btn btn-primary"
        >
          Order pizzas
        </button>
        <button
          onClick={handleClearCart}
          className="btn-secondary"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;