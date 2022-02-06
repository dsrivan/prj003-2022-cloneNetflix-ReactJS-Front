import React, { useState } from "react";
import './styles.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const IMG_POSTER_PATH = process.env.REACT_APP_IMG_POSTER_PATH;

const MovieRow = ({ title, items }) => {

    const [scrollX, setScrollX] = useState(-800);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        x = (x > 0) ? 0 : x;
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;

        if ((window.innerWidth - listWidth) > x) {
            x = ((window.innerWidth - listWidth) - 60);
        }

        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--listArea">
                <div
                    className="movieRow--list"
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}
                >
                    {items.results.length > 0 && items.results.map((movie, key) => (
                        <div key={key} className="movieRow--item">
                            <img
                                src={`${IMG_POSTER_PATH}${movie.poster_path}`}
                                alt={movie.original_title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieRow;