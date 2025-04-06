// import { color } from "motion/react";
import PropTypes from 'prop-types';
import '../index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//common Button
const Button = ({
  classes = '',
  variant = 'filled',
  color = 'primary',
  children,
  ...rest
}) => {
  return (
    <button
      className={`btn ${variant} ${color} ${classes}`}
      {...rest}
    >
      {children}
      <div className='state-layer'></div>
    </button>
  );
};
Button.propTypes = {
  classes: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.any,
};

//icon Button
const IconBtn = ({ classes = '', icon, size = '', children, ...rest }) => {
  return (
    <motion.button
      className={`icon-btn ${size} bg-blue-400 text-black ${classes}`}
      {...rest}
    >
      {children}
      {!children && (
        <span className='material-symbols-rounded icon'> {icon} </span>
      )}
      <div className='state-layer'></div>
    </motion.button>
  );
};
IconBtn.propTypes = {
  classes: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.any,
};
//Extended fab

const ExtendedFab = ({ href, text, classes = '', ...rest }) => {
  return (
    <Link
      to={href}
      className={`bg-blue-300 text-black/80 font-bold text-lg extended-fab${classes}`}
      {...rest}
    >
      
      <span className='material-symbols-rounded'>add</span>

      <span className='truncate'>{text}</span>

      <span className='state-layer'></span>
    </Link>
  );
};

ExtendedFab.propTypes={
    href: PropTypes.string,
    text: PropTypes.string,
    classes: PropTypes.string,
};

export { Button, IconBtn, ExtendedFab };
