import apiParams from "./configApi";
import axios from "axios";

export const getXHeroes = async (x = 20) => {
  const { ts, apikey, hash, baseURL } = apiParams;

  try {
    const { data } = await axios.get(`${baseURL}/v1/public/characters`, {
      params: {
        ts,
        apikey,
        hash,
        limit: x,
        offset: 0,
      },
    });

    const heroes = data.data.results.map((hero) => {
      const { id, name, description, thumbnail } = hero;
      return {
        id,
        name,
        description:
          description === "" ? `${name}'s info is classified` : description,
        thumbnail: thumbnail.path + "." + thumbnail.extension,
      };
    });
    return heroes;
  } catch (error) {
    console.log(error.message);
  }
};
