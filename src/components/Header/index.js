import React from "react";
import './styles.css'
import Logo from '../../assets/img/logo_netflix.png';
import Usuario from '../../assets/img/usuario_netflix.png';

const Header = ({ black }) => {
    return (
        <header className={black ? "isBlack" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="Logo Netflix" />
                </a>
            </div>
            <div className="header--user">
                <img src={Usuario} alt="Imagem usuário" />
            </div>
        </header>
    )
}

export default Header;