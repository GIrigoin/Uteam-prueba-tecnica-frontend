import editIcon from "../assets/pen-svgrepo-com.svg";
import deleteIcon from "../assets/close-circle-svgrepo-com.svg";

const Card = ({ id, name, description, thumbnail, onDelete, onEdit }) => {
  return (
    <div className="static group shadow-lg shadow-gray-800/70 w-64 rounded-xl bg-gradient-to-b from-violet-500 to-violet-950  hover:scale-105 hover:shadow-xl hover:shadow-gray-800/70 transition-all duration-300">
      <div className="w-full hidden  group-hover:absolute top-0 group-hover:flex justify-between p-4">
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-200 hover:bg-blue-500 active:bg-blue-300"
          onClick={() => onEdit({ id, name, description, thumbnail })}
        >
          <img className="w-4" src={editIcon} alt="Edit Info" />
        </button>
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-200 hover:bg-red-500 active:bg-red-200"
          onClick={() => onDelete(id)}
        >
          <img className="w-8" src={deleteIcon} alt="Delete Hero" />
        </button>
      </div>
      <div className="flex flex-col items-start justify-between">
        <img className="w-64 rounded-t-lg" src={thumbnail} alt={name} />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center text-gray-50 mb-4">
          {name}
        </h1>
        <p className="text-gray-300/0 font-semibold group-hover:text-gray-300/100 text-xs transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
