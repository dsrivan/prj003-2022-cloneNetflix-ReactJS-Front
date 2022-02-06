import React, { useEffect, useState } from 'react';
import './App.css';

import { getHomeList, getMovieInfo } from './Tmdb/Tmdb';

import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(() => {
    const scrollListener = () => setBlackHeader((window.scrollY > 50) ? true : false);

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return (
    <div className="page">

      {!featuredData && <Loading />}

      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie movie={featuredData} />}

      <div className="lists">
        {movieList.map((movie, key) => (
          <MovieRow
            key={key}
            title={movie.title}
            items={movie.items}
          />
        ))}
      </div>

      <Footer />

    </div>
  );
}

export default App;
