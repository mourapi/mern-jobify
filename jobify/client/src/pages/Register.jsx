import { FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='john'/>
        <FormRow 
          type='text' 
          name='lastName' 
          labelText='last name' 
          defaultValue='doe'
         />
        <FormRow type='text' name='location' defaultValue='earth' />
        <FormRow type='text' name='email' defaultValue='john@gmail.com'/>
        <FormRow type='password' name='password' defaultValue='secrete!@#'/>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
    
  );
};
export default Register;