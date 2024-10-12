import { useState } from "react";

const Form = ({
  id = 0,
  name = "",
  description = "",
  thumbnail = "",
  onSubmit,
  showChange,
}) => {
  const [form, setForm] = useState({ name, description, thumbnail });
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newForm = { ...form, [name]: value };
    setForm((prev) => newForm);
  };

  const validate = () => {
    const regexImage = /https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp)(?:\?.*)?/;

    const errors = [];
    if (form.name === "") errors.push("Name can't be empty");
    if (form.name.length > 40)
      errors.push("Name must be 40 characters or less");
    if (!regexImage.test(form.thumbnail))
      errors.push("You must enter a valid image URL ");

    return errors.join(", ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorData = validate();
    setErrors(errorData);
    if (errorData === "") {
      onSubmit({ ...form, id });
      setErrors("Success!");
      await setTimeout(() => {
        showChange(false);
        setErrors("");
      }, 1000);
    }
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setErrors("");
    showChange(false);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/80 flex items-center justify-center">
      <form
        className="p-8  flex flex-col gap-2 bg-gradient-to-b from-violet-500 to-violet-950 rounded-xl items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-gray-100 m-4 text-center text-3xl font-semibold">
          {id === 0 ? "Create a New Hero" : `Edit ${name}'s Info`}
        </h1>

        <label className="flex flex-col" htmlFor="name">
          <span className="text-2xl text-gray-300 font-medium">Name: </span>
          <input
            className="h-8 w-96 rounded p-2 m-2 bg-slate-300 text-gray-800"
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col" htmlFor="thumbnail">
          <span className="text-2xl text-gray-300 font-medium">Image: </span>
          <input
            className="h-8 w-96 rounded p-2 m-2 bg-slate-300 text-gray-800"
            type="text"
            name="thumbnail"
            id="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col" htmlFor="description">
          <span className="text-2xl text-gray-300 font-medium">
            Description:{" "}
          </span>
          <textarea
            className="h-24 w-96 rounded p-2 m-2 bg-slate-300 text-gray-800 resize-none"
            name="description"
            id="description"
            value={form.description}
            onChange={handleChange}
            maxLength={300}
          ></textarea>
        </label>

        <p className="h-8 text-sm text-red-700 font-semibold">{errors}</p>
        <div>
          <button
            className="bg-blue-600 h-10 mx-4 px-4 rounded-lg text-white font-bold hover:bg-blue-500 active:bg-blue-400 hover:-translate-y-1 active:translate-y-0 shadow-md shadow-blue-500"
            type="submit"
          >
            {id === 0 ? "Create" : "Change Info"}
          </button>
          <button
            className="bg-gray-600 h-10 mx-4 px-4 rounded-lg text-white font-bold hover:bg-gray-500 active:bg-gray-400 hover:-translate-y-1 active:translate-y-0 shadow-md shadow-gray-500"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
