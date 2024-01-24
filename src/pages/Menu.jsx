import { useEffect, useState } from 'react';
import { PIZZA_API } from '../constants/constants';
import MenuItem from '../components/MenuItem';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetch(`${PIZZA_API}/menu`);

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const { data } = await response.json();

        setMenu(data);
      } catch (e) {
        console.error(e.message);
      }
    };

    getMenu();
  }, []);

  return (
    <div className='mx-auto max-w-3xl'>
      <ul className='divide-y divide-stone-200 px-2'>
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} item={pizza} />
        ))}
      </ul>
    </div>
  )
};

export default Menu;
