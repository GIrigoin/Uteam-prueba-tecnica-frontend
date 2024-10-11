import { useState } from "react";

const Form = ({ id = 0, name = "", description = "", thumbnail = "" }) => {
  const [form, setForm] = useState({ name, description, thumbnail });
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newForm = { ...form, [name]: value };
    setForm((prev) => newForm);
  };

  const validate = () => {
    const regexImage = /https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp)/;

    const errors = [];
    if (form.name === "") errors.push("Name can't be empty");
    if (form.name.length > 40)
      errors.push("Name must be 40 characters or less");
    if (!regexImage.test(form.thumbnail))
      errors.push("You must enter a valid image URL ");

    return errors.join(", ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorData = validate();
    if (errorData === "") return;
    else setErrors(validate());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <span>Name: </span>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="thumbnail">
        <span>Image: </span>
        <input
          type="text"
          name="thumbnail"
          id="thumbnail"
          value={thumbnail}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="description">
        <span>Description: </span>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={handleChange}
        ></textarea>
      </label>

      <p>{errors}</p>
      <button type="submit">mandale mecha</button>
    </form>
  );
};

export default Form;
