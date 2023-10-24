import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';
/// import { Logo } from '../components';
import { FormRow, Logo } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Login</h4>
        <FormRow type='email' name='email' 
        defaultValue='john@gmail.com' />
         <FormRow type='password' name='password' 
        defaultValue='secret!@#' />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <button type='submit' className='btn btn-block'>
          explore the app
        </button>
        <p>
          Not a member yet?
            <Link to='/register' className='member-btn'>
              Register
            </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
