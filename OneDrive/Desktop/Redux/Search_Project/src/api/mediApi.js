import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;
const PEXEL_KEY = import.meta.env.VITE_PEXEL_KEY;

export async function fatchPhotos(query, page = 1, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });

  return res.data.results;
}

export async function fatchVideos(query, page = 1, per_page = 20) {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, page, per_page },
    headers: { Authorization: PEXEL_KEY },
  });

  return res.data.videos;
}

export async function fetchGIF(query, limit = 20) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { api_key: GIPHY_KEY, q: query, limit },
  });
  return res.data.data;
}
