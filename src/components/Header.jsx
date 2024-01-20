import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 font-serif uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Pizza day
      </Link>
      <input
        type="text"
        placeholder="Search for the order #"
        className="rounded-md bg-yellow-100 px-4 py-2 text-sm placeholder: text-stone-400 sm:focus:w-72 sm:w-64 transition-all duration-300 focus:outline-none focus:ring-opacity-50 focus:ring focus:ring-yellow-500"
      />
    </header>
  );
}

export default Header