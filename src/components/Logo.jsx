import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//assests
import { logoLight, logoDark } from '../assets/assets';
//components


const Logo = ({classes=''}) => {
  return (
    <div className='flex flex-col items-center gap-2 my-4 '>
      <h3 className='text-md font-extrabold m-4'>FinSafe - <span className='italic font-medium'>Your personal financial advisor</span></h3>
    </div>
  );
};

Logo.propTypes={
    classes:PropTypes.string,
};
export default Logo;
