/* eslint-disable react/prop-types */
const Input = ({ type, className, placeholder }) => {
  return (
    <>
      <input type={type || 'text'} className={className} placeholder={placeholder || 'Enter value'} />
    </>
  );
};

export default Input;
