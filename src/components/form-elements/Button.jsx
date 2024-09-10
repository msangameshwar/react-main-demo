/* eslint-disable react/prop-types */
const Button = ({ className, type, title }) => {
  return (
    <>
      <button className={className} type={type}>
        {title}
      </button>
    </>
  );
};

export default Button;
