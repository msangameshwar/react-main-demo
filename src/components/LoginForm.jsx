import { useForm } from 'react-hook-form';
import axios from 'axios';
import Label from './form-elements/Label';
import Input from './form-elements/Input';
import Button from './form-elements/Button';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://your-backend-api-endpoint/login', data);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='row d-flex align-items-center justify-content-center mt-5'>
      <div className='col-3 card p-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className='mb-3'>
            <Label title='Email Address' className='form-label' />
            <Input
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              type='email'
              placeholder='Email address'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <div className='invalid-feedback'>{errors.email.message}</div>}
          </div>

          {/* Password Input */}
          <div className='mb-3'>
            <Label title='Password' className='form-label' />
            <Input
              type='password'
              placeholder='Enter password'
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
            />
            {errors.password && <div className='invalid-feedback'>{errors.password.message}</div>}
          </div>

          {/* Submit Button */}
          <div className='d-flex justify-content-center'>
            <Button type='submit' className='btn btn-primary w-100' title={isSubmitting ? 'Logging in...' : 'Login'} disabled={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
