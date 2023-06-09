import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggein } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggein);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
