import { getXHeroes } from "../utils/fetchHeroes";
import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const heroes = await getXHeroes(40);
        setData(heroes);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const deleteHero = (id) => {
    setLoading(true);
    const filteredHeros = data.filter((hero) => hero.id !== id);
    setData(filteredHeros);
    setLoading(false);
  };

  return (
    <div className="h-full p-8">
      {isLoading ? (
        <div className="flex justify-center items-center font-bold text-4xl animate-pulse">
          <h1>Loading</h1>
        </div>
      ) : (
        <div className="flex flex-row gap-8 flex-wrap justify-evenly">
          {data.map((hero) => (
            <Card
              key={hero.id}
              id={hero.id}
              name={hero.name}
              description={hero.description}
              thumbnail={hero.thumbnail}
              onDelete={deleteHero}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
