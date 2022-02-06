import React from "react";
import './styles.css';

const FeaturedMovie = ({ movie }) => {
    const IMG_BACKDROP_PATH = process.env.REACT_APP_IMG_BACKDROP_PATH;

    const {
        original_name: iName,
        backdrop_path: iBackdrop,
        vote_average: iAverage,
        number_of_seasons: iSeasons

    } = movie;

    return (
        <section
            className="featured"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${IMG_BACKDROP_PATH}${iBackdrop})`,
            }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{iName}
                        <div className="featured--info">
                            <div className="featured--points">{iAverage} pontos</div>
                            <div className="featured--year">2099</div>
                            <div className="featured--seasons">{iSeasons} temporadas</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;