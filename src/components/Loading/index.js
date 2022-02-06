import React from "react";
import './styles.css';

import Spinner from '../../assets/img/spinner_netflix.png';

const Loading = () => {
    return (
        <div className="loader--out">
            <div className="loader">
                <img src={Spinner} alt="Imagem carregando página" />
            </div>
        </div>
    );
}

export default Loading;