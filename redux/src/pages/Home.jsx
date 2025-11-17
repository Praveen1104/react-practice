import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";

const Home = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });
  const dispatch = useDispatch();

  const handleChnage = (event) => {
    const { name, value } = event.target;
    console.log(name);

    setFormInput((current) => ({
      ...current,
      [name]: value,
    }));
  };
  console.log(formInput);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(formInput));
  };
  return (
    <div>
      <form>
        <label>Name</label>
        <br />
        <input
          name="name"
          type="text"
          value={formInput.name}
          onChange={handleChnage}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          name="age"
          type="number"
          value={formInput.age}
          onChange={handleChnage}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          name="email"
          type="text"
          value={formInput.email}
          onChange={handleChnage}
        />
        <br />
        <label>Contact</label>
        <br />
        <input
          name="contact"
          type="number"
          value={formInput.contact}
          onChange={handleChnage}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Home;
