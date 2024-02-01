import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { name, onChange, onBlur, value, label, error, type } = props;
  if (type === "checkbox") {
    return (
      <>
        <input
          type={type}
          ref={ref}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          checked={value}
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
          ref={ref}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          className="input w-full"
        />
        {error && (
          <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
            {error}
          </p>
        )}
      </div>
    </>
  );
})

export default Input;