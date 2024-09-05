import Button from './Button';
import InputBox from './InputBox';

const Form = () => {
  return (
    <>
      <form className="mt-5">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <InputBox />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <InputBox />
        </div>
        <Button />
      </form>
    </>
  );
};

export default Form;
