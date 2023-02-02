import * as Styled from './style';
import Logo from '../../assets/Logo.png';


export function Header() {
  return (
    <Styled.Header>
      <img src={Logo} alt="Logo" />
    </Styled.Header>
  );
};
