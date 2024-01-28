import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserInfoContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user } = useContext(UserContext);
  const cart = useSelector(state => state.cart.items);
  return (
    <header className="font-serif flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <NavLink to="/" className="tracking-widest">
        Pizza day
      </NavLink>
      <input
        type="text"
        placeholder="Search for the order #"
        className="placeholder: rounded-md bg-yellow-100 px-4 py-2 text-sm text-stone-400 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
      {user.username ? (
        <div className="text-sm font-semibold md:block">{user.username}</div>
      ) : null}

      <NavLink to="/cart" className="tracking-widest">
        Cart
        {cart.length > 0 ? <span>{`(${cart.length})`} &rarr;</span> : null}
      </NavLink>
    </header>
  );
}

export default Header