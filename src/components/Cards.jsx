import { getXHeroes } from "../utils/fetchHeroes";
import { useEffect, useState } from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import addIcon from "../assets/add-circle-svgrepo-com.svg";

const Cards = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const initialFormData = {
    id: 0,
    name: "",
    thumbnail: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [showForm, setShowForm] = useState(false);
  const showFormChange = (state) => {
    setShowForm(state);
  };
  const prepareFormForEdit = ({ id, name, description, thumbnail }) => {
    setFormData({ id, description, name, thumbnail });
    setShowForm(true);
  };

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

  const editHeroInfo = ({ id, name, thumbnail, description }) => {
    const heroes = data;
    const index = heroes.findIndex((hero) => hero.id === id);
    if (index === -1) return;
    heroes[index] = {
      id,
      name,
      thumbnail,
      description:
        description === "" ? `${name}'s info is classified` : description,
    };

    setData((prev) => heroes);
    setFormData(initialFormData);
  };

  const createHero = ({ name, description, thumbnail }) => {
    const id = uuidv4();
    setData((prev) => [
      ...prev,
      {
        id,
        name,
        thumbnail,
        description:
          description === "" ? `${name}'s info is classified` : description,
      },
    ]);
    setFormData(initialFormData);
  };

  const handleCreateClick = () => {
    setFormData(initialFormData);
    showFormChange(true);
  };

  return (
    <div className="h-full p-8">
      {isLoading ? (
        <div className="flex justify-center items-center font-bold text-7xl animate-pulse pt-48">
          <h1>Loading...</h1>
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
              onEdit={prepareFormForEdit}
            />
          ))}
        </div>
      )}
      {showForm && (
        <Form
          id={formData.id}
          name={formData.name}
          thumbnail={formData.thumbnail}
          description={formData.description}
          onSubmit={formData.id === 0 ? createHero : editHeroInfo}
          showChange={showFormChange}
        />
      )}
      <button
        className="fixed bottom-2 right-2 bg-amber-200 w-24 rounded-full hover:bg-green-500 active:bg-green-200"
        onClick={handleCreateClick}
      >
        <img src={addIcon} alt="" />
      </button>
    </div>
  );
};

export default Cards;
