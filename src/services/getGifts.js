import { API_KEY, API_URL } from "./settings";

const getGifts = async ({ limit = 20, keyword = "dogs", page = 0 } = {}) => {
  const apiUrl = `${API_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=es`;

  const res = await fetch(apiUrl);
  const response = await res.json(); // Convierte la respuesta en un json
  const { data } = response; // obtiene la data de la api

  const gifs = data.map((image) => {
    const { images, title, id } = image;
    const { url } = images.downsized_medium;
    return { title, id, url };
  });

  return gifs;
};

export default getGifts;
