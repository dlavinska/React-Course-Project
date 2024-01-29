import { useEffect} from 'react';
import MenuItem from '../components/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems } from '../redux/slices/menuSlice';
import Loader from '../components/Loader';
import Error from '../components/Error';


const Menu = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, menuItems } = useSelector((state) => state.menu);
  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);

  if (isLoading) {
    return <Loader/>
  }

  if (isError) {
    return <Error error={isError} />
  }

  return (
    <div>
      <ul className='divide-y divide-stone-200 px-2'>
        {!!menuItems && menuItems.map((pizza) => (
          <MenuItem key={pizza.id} item={pizza} />
        ))}
      </ul>
    </div>
  )
};

export default Menu;
