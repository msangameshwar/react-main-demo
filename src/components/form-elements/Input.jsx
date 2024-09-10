/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const Input = forwardRef(({ type, className, ...rest }, ref) => <input type={type} className={className} ref={ref} {...rest} />);

export default Input;
