/* eslint-disable react/prop-types */
const Label = ({className, title}) => {
  return (
    <>
      <label className={className}>{title}</label>
    </>
  );
};

export default Label;
