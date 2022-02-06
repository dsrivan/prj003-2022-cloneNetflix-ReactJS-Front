import React, { useEffect, useState } from 'react';
import './App.css';

import getHomeList from './Tmdb/Tmdb';

import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, []);

  return (
    <>
      <div className="page">

        {featureData &&
          <FeatureMovie item={featureData} />
        }
        <div className="lists">
          {movieList.map((movie, key) => (
            <div>
              <MovieRow
                key={key}
                title={movie.title}
                items={movie.items}
              ></MovieRow>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
