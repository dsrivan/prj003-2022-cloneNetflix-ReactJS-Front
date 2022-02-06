import React from "react";
import './styles.css';

const IMG_POSTER_PATH = process.env.REACT_APP_IMG_POSTER_PATH;

const MovieRow = ({ title, items }) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listArea">
                <div className="movieRow--list">
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