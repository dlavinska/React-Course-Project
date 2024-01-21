import { useContext } from 'react';
import { UserContext } from '../context/UserInfoContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(14, "Name must be 14 characters or less")
        .required("*Name is required"),
    }),
    onSubmit: (values) => {
      setUser({username: values.username});
      console.log(`Your name is: ${values.username}`);
    }
  });
  return (
    <div className="my-10 text-center sm:my-16 px-4">
      <h1 className="text-xl font-semibold mb-8 md:text-3xl">
        The best pizza.
        <br/>
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      <form onSubmit={formik.handleSubmit} className="form-name">
        <div>
          <input
            name="username"
            onChange={formik.handleChange}
            values={formik.values.username}
            placeholder="Your full name"
            className="w-72 input mb-8 rounded-md"
          />
          {formik.submitCount > 0 && formik.errors.username && (
            <p className="text-red-500 text-xs italic mb-8">
              {formik.errors.username}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="inline-block rounded-md text-sm bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
          >
            UserName-btn
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;