import React, { useState } from "react";
import './styles.css'
import Logo from '../../assets/img/logo_netflix.png';
import Usuario from '../../assets/img/usuario_netflix.png';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = ({ black }) => {

    const windowWidth = (window.innerWidth < 820) ? -3000 : 0;

    const [scrollX, setScrollX] = useState(windowWidth);

    const showMenuMobile = () => setScrollX((scrollX < 0) ? "0" : -3000);

    return (
        <header className={black ? "isBlack" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="Logo Netflix" />
                </a>
                <MenuIcon className="menu" onClick={showMenuMobile} />
                <ul
                    className="header--logo-ul"
                    style={{
                        marginLeft: scrollX
                    }}
                >
                    <li className="li--logo--btnClose">
                        <CloseIcon className="close" onClick={showMenuMobile} />
                        <div>
                            <img src={Logo} alt="Logo Netflix" />
                        </div>
                    </li>
                    <li>Inicio</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <li>Minha lista</li>
                </ul>
            </div >
            <div className="header--user">
                <ul className="header--user-ul">
                    <li>
                        <SearchIcon />
                    </li>
                    <li>Infantil</li>
                    <li>
                        <NotificationsIcon />
                    </li>
                    <li>
                        <img
                            src={Usuario}
                            alt="Imagem usuário"
                        />
                        <ArrowDropDownIcon />
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Header;