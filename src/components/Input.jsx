import { useController } from "react-hook-form";

const Input = (props) => {
  const { name, label, type } = props;
  const { field, fieldState } = useController(props);
  if (type === "checkbox") {
    return (
      <>
        <input
          type={type}
          name={name}
          {...field}
          className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
        />
        <label className="font-medium">{label}</label>
      </>
    );
  }
  return (
    <>
      <label className="sm:basis-40">{label}</label>
      <div className="grow">
        <input
          type={type}
          name={name}
          {...field}
          className="input w-full"
        />
        {fieldState.error && (
          <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
            {fieldState.error.message}
          </p>
        )}
      </div>
    </>
  );
}

export default Input;