

const GIPHY_API_KEY = "6DyUTT4w1NZvvZh3JvOUlR4XPwFeiTG4";

export const getTrendingGiphs = () => {
    const queryParams = new URLSearchParams({
        api_key: GIPHY_API_KEY,
    });

    return fetch(`https://api.giphy.com/v1/gifs/trending?${queryParams}`)
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getGiphById = (giphId) => {
    const queryParams = new URLSearchParams({
      api_key: GIPHY_API_KEY,
    });
    return fetch(`https://api.giphy.com/v1/gifs/${giphId}?${queryParams}`)
      .then((res) => res.json())
      .then((res) => res.data);
  };


export const getGiphsByQuery = (q) => {
    const queryParams = new URLSearchParams({
        api_key: GIPHY_API_KEY,
    });

    return fetch(`https://api.giphy.com/v1/gifs/search?${queryParams}`)
    .then((res) => res.json())
    .then((res) => res.data);
};

export const searchGiphs = () => {};


