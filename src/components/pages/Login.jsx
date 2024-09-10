import { useForm } from 'react-hook-form';
import Label from '../form-elements/Label';
import Input from '../form-elements/Input';
import Button from '../form-elements/Button';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='row d-flex align-items-center justify-content-center mt-5'>
        <div className='col-3 card p-4'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <Label className='form-label' title='Email address' />
              <Input type='email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email', { required: 'Email is required' })} />
              {errors.email && <div className='invalid-feedback'>{errors.email.message}</div>}
            </div>
            <div className='mb-3'>
              <Label className='form-label' title='Password' />
              <Input type='password' className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register('password', { required: 'Password is required' })} />
              {errors.password && <div className='invalid-feedback'>{errors.password.message}</div>}
            </div>
            <div className='d-flex justify-content-center'>
              <Button type='submit' className='btn btn-primary w-100' title='Log In' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
