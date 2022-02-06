import React, { useEffect, useState } from 'react';
import './App.css';

import { getHomeList, getMovieInfo } from './Tmdb/Tmdb';

import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {

      // lista total
      let list = await getHomeList();
      setMovieList(list);

      // filme em destaque
      let originals = list.filter(listItem => listItem.slug === "originals");

      // número aleatório com base no tamanho da lista de itens
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));

      // define o filme random
      let chosen = originals[0].items.results[randomChosen];

      // obj do filme random
      let chosenInfo = await getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

    }
    loadAll();
  }, []);

  return (
    <div className="page">
      {
        featuredData &&
        <FeaturedMovie movie={featuredData} />
      }
      <div className="lists">
        {movieList.map((movie, key) => (
          <MovieRow
            key={key}
            title={movie.title}
            items={movie.items}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
