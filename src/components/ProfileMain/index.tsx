import { NavItem } from '../NavItem';
import { ProfilePage } from '../ProfilePage';

import { Container } from './styles';

function ProfileMain() {
  return (
    <Container>
      <NavItem />
      <ProfilePage />
    </Container>
  );
}

export { ProfileMain };
