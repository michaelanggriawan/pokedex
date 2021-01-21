import { Footer as Container } from '../styles/styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container>
      <Link to='/' className="link">
        <span>HOME</span>
      </Link>
      <div className="line-up" />
      <Link to='/my-pokemon' className="link">
        <span>MY POKEMON</span>
      </Link>
    </Container>
  );
}

export default Footer;
