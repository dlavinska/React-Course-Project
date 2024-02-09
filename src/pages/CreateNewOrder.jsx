import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../context/UserInfoContext";
import { useForm, Controller } from "react-hook-form";
import { validationSchema } from "../schems/validationSchema";
import Input from "../components/Input";
import Button from "../components/Button";
import { formatPrice } from '../formats/formats';
import { clearCart } from "../redux/slices/cartSlice";
import { addOrderInfo, postOrderItems } from "../redux/slices/orderSlice";
import { useNavigate } from "react-router-dom";
import Error from '../components/Error';

const CreateNewOrder = () => {
  const { user } = useContext(UserContext);
  const cart = useSelector((state) => state.cart.items);
  const { isError, isLoading } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, reset, control, watch } = useForm({
    defaultValues: {
      customer: user.username,
      phone: "",
      address: "",
      priority: false,
    },
    resolver: yupResolver(validationSchema)
  });

  const isCheckedValue = watch("priority");
  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const priorityPrice = isCheckedValue ? 8 : 0;
  const totalOrderPrice = totalCartPrice + priorityPrice;


  if (isError) {
    return <Error error={isError} />;
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  
  const onSubmit = (data) => {
    const cartInfo = cart.map((item) => (
      {
        pizzaId: item.id,
        name: item.name,
        quantity: item.qty,
        unitPrice: item.unitPrice,
        totalPrice: item.totalPrice    
      }
    ));

    const order = {
      ...data,
      cart: cartInfo,
      position: ""
    };

    dispatch(postOrderItems(order))
      .then((response) => {
        const data = response.payload;
        if (data.status === "success") {
          dispatch(addOrderInfo(data));
          navigate(`/order/${data.data.id}`);
        }
      }
    )

    reset();
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <Controller
            name="customer"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                type="text"
                error={error?.message}
                {...field}
                label="First Name"
              />
            )}
          />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                type="text"
                error={error?.message}
                {...field}
                label="Phone Number"
              />
            )}
          />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <Controller
            name="address"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                type="text"
                error={error?.message}
                {...field}
                label="Address"
              />
            )}
          />
        </div>
        <div className="z-50 mb-12 flex items-center justify-center gap-5">
          <Controller
            name="priority"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="checkbox"
                checked={field.value ?? false}
                label="Want to give your order priority?"
              />
            )}
          />
        </div>
        <div>
          <Button
            className="btn btn-primary"
            title="Order now for"
            value={formatPrice(totalOrderPrice)}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateNewOrder;