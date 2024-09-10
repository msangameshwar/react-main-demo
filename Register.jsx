import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, 
  } = useForm();

  // Watch password value
  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://your-backend-api-endpoint/login', data);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="row d-flex align-items-center justify-content-center mt-5 ">
        <div className="col-3 card p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" {...register('first_name', { required: 'First name is required' })} />
              {errors.first_name && <p className="text-danger">{errors.first_name.message}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" {...register('last_name', { required: 'Last name is required' })} />
              {errors.last_name && <p className="text-danger">{errors.last_name.message}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                })}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                {...register('conf_password', {
                  validate: (value) => value === password || 'Passwords do not match',
                })}
              />
              {errors.conf_password && <p className="text-danger">{errors.conf_password.message}</p>}
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
