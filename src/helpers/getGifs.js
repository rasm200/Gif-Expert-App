export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=R0yVK8DOuYF1RX8Fxs8I75X3BDhGYFEo&q=${category}&limit=20`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  //console.log(gifs);

  return gifs;
};
