import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import {} from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/tasks">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};