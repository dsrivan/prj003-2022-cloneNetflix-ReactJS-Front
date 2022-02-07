import React from "react";
import './styles.css';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';

const FeaturedMovie = ({ movie: item }) => {
    const IMG_BACKDROP_PATH = process.env.REACT_APP_IMG_BACKDROP_PATH;

    const {
        original_name: iName,
        backdrop_path: iBackdrop,
        vote_average: iAverage,
        number_of_seasons: iSeasons,
        overview: iOverview,
        first_air_date: iDate
    } = item;

    const txtAverage = `${iAverage} pontos`;
    const txtQtSeasons = `${iSeasons} temporada${((iSeasons > 1) ? "s" : "")}`;
    const txtOverview = (iOverview.length > 130) ? `${iOverview.substring(0, 130)}...` : iOverview;

    let txtDate = new Date(iDate);
    txtDate = txtDate.getFullYear()

    let genres = item.genres
        .reduce((accumulator, gen) => accumulator += gen.name + ", ", "");
    genres = `Gêneros: ${genres.slice(0, genres.length - 2)}`;

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
                    <div className="featured--name">{iName}</div>
                    <div className="featured--info">
                        <div className="featured--points">{txtAverage}</div>
                        <div className="featured--year">{txtDate}</div>
                        <div className="featured--seasons">{txtQtSeasons}</div>
                    </div>
                    <div className="featured--description">{txtOverview}</div>
                    <div className="featured--buttons">
                        <a href="/" className="featured--play">
                            <PlayArrowIcon className="icon" />
                            Assistir
                        </a>
                        <a href="/" className="featured--moreInfo">
                            <InfoIcon className="icon" />
                            Mais informações
                        </a>
                    </div>
                    <div className="featured--genres">
                        <strong>{genres}</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;