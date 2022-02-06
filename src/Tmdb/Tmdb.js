let availableLanguages = ['en', 'pt-BR'];
let selectedLanguage = availableLanguages[1];

const URL_COMPLEMENT = `language=${selectedLanguage}&api_key=${process.env.REACT_APP_API_KEY}`;

const objUrls = {
    "originals": `${process.env.REACT_APP_API_BASE}/discover/tv?with_network=213&${URL_COMPLEMENT}`,
    "trending": `${process.env.REACT_APP_API_BASE}/trending/all/week?${URL_COMPLEMENT}`,
    "toprated": `${process.env.REACT_APP_API_BASE}/movie/top_rated?${URL_COMPLEMENT}`,
    "action": `${process.env.REACT_APP_API_BASE}/discover/movie?with_genres=28&${URL_COMPLEMENT}`,
    "comedy": `${process.env.REACT_APP_API_BASE}/discover/movie?with_genres=35&${URL_COMPLEMENT}`,
    "horror": `${process.env.REACT_APP_API_BASE}/discover/movie?with_genres=27&${URL_COMPLEMENT}`,
    "romance": `${process.env.REACT_APP_API_BASE}/discover/movie?with_genres=10749&${URL_COMPLEMENT}`,
    "documentary": `${process.env.REACT_APP_API_BASE}/discover/movie?with_genres=99&${URL_COMPLEMENT}`,
    "animation": `${process.env.REACT_APP_API_BASE}/discover/movie?with_genres=16&${URL_COMPLEMENT}`,
    "sciencefiction": `${process.env.REACT_APP_API_BASE}/discover/movie?with_genres=878&${URL_COMPLEMENT}`,
    "mystery": `${process.env.REACT_APP_API_BASE}/discover/movie?with_genres=9648&${URL_COMPLEMENT}`,
    "war": `${process.env.REACT_APP_API_BASE}/discover/movie?with_genres=10752&${URL_COMPLEMENT}`
}

const basicFetch = async (endpoint) => {
    const req = await fetch(endpoint);
    const json = await req.json();
    return json;
}

const getHomeList = async () => {
    return [
        {
            slug: 'originals',
            title: 'Originais Netflix',
            items: await basicFetch(objUrls.originals)
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch(objUrls.trending)
        },
        {
            slug: 'toprated',
            title: 'Em alta',
            items: await basicFetch(objUrls.toprated)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(objUrls.action)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(objUrls.comedy)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(objUrls.horror)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(objUrls.romance)
        },
        {
            slug: 'documentary',
            title: 'Documentário',
            items: await basicFetch(objUrls.documentary)
        },
        {
            slug: 'animation',
            title: 'Animação',
            items: await basicFetch(objUrls.animation)
        },
        {
            slug: 'sciencefiction',
            title: 'Ficção Científica',
            items: await basicFetch(objUrls.sciencefiction)
        },
        {
            slug: 'mystery',
            title: 'Mistério',
            items: await basicFetch(objUrls.mystery)
        },
        {
            slug: 'war',
            title: 'Guerra',
            items: await basicFetch(objUrls.war)
        },
    ];
}

export default getHomeList;