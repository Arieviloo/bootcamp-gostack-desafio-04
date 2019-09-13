import React from 'react';
import './style.css';
import logo from '../../files/face.png';
import user from '../../files/user.png';

const Header = () => {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} />
        <div>
          <span>Meu Perfil</span>

          <img className="user" src={user} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
