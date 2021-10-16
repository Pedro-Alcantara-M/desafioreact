import react from '../../assets/react.jpeg';
import './styles.css';

function Header() {
  return (
    <nav className="navbar-react">
      <div className="navbar-item-1">
        <img src={react} className="logo-react" alt="react" />
      </div>
      <div className="navbar-item-2">
        <h3>Desafio React JS - Exposição de dados de servidores em Datatable</h3>
      </div>
    </nav>
  );
}

export default Header;