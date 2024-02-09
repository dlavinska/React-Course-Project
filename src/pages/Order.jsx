import { useEffect } from "react";
import { formatMinutesLeft, formatDate, formatPrice } from "../formats/formats";
import OrderItem from "../components/OrderItem";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { getMenuItems } from "../redux/slices/menuSlice";
import { updateOrderItems } from "../redux/slices/orderSlice";

const Order = () => {
  const {orderData} = useSelector((state) => state.order);
  const deliveryIn = formatMinutesLeft(orderData.data.estimatedDelivery);
  const dispatch = useDispatch();
  const { isLoading, menuItems } = useSelector((state) => state.menu);
  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);

  const handleUpdatePriority = () => {
    dispatch(updateOrderItems(orderData.data.id)); 
  };

  const priorityPrice = orderData.data.priority ? 8 : 0;
  
  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">
          Order #{orderData.data.id} status: {orderData.data.status}
        </h2>
        <div className="space-x-2">
          {orderData.data.priority && (
            <span className="rounded-md bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="text-green-5 rounded-md bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
            {orderData.data.status} order
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-stone-200 px-1 py-1">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${formatMinutesLeft(orderData.data.estimatedDelivery)} minutes left 😃`
            : `Order should have arrived`}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(orderData.data.estimatedDelivery)})
        </p>
      </div>
      <ul className="dive-stone-200 divide-y border-b border-t">
        {orderData.data.cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={isLoading === true}
            ingredients={
              menuItems.find((el) => el.id === item.pizzaId)?.ingredients ?? []
            }
          />
        ))}
      </ul>
      <div className="space-y-2 rounded-md bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatPrice(orderData.data.orderPrice)}
        </p>
        {orderData.data.priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatPrice(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery:{" "}
          {formatPrice(orderData.data.orderPrice + priorityPrice)}
        </p>
      </div>
      {!orderData.data.priority && (
        <div className="text-right">
          <Button
            className="btn btn-primary"
            title="Prioritize"
            onClick={handleUpdatePriority}
          />
        </div>
      )}
    </div>
  );
}

export default Order;