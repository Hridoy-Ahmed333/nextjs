"use client";
import React, { useState } from "react";
import "./ShowForm.css";

const ShowForm = ({ content }) => {
  const [formState, setFormState] = useState({
    name: "",
    otherName: "",
    season: "",
    description: "",
    year: "",
    airedSeason: "",
    episode: 1,
    status: "",
    watchedEpisode: 0,
  });

  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create a new FormData instance
    const formData = new FormData();

    Object.keys(formState).forEach((key) => {
      formData.append(key, formState[key]);
    });

    if (image) {
      formData.append("image", image);
    }
    try {
      const res = await fetch(`http://localhost:3000/api/${content}`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status`);
      }

      const data = await res.json();
      console.log(data);
      // Here you can handle the successful response, e.g., update the UI
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      // Here you can handle the error, e.g., show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Other Name:
        <input
          type="text"
          name="otherName"
          value={formState.otherName}
          onChange={handleChange}
        />
      </label>
      <label>
        Season:
        <input
          type="text"
          name="season"
          value={formState.season}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formState.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          type="file"
          name="image"
          value={formState.image}
          onChange={(e) => setImage(e.target.files?.[0])}
        />
      </label>
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={formState.year}
          onChange={handleChange}
        />
      </label>
      <label>
        Aired Season:
        <input
          type="text"
          name="airedSeason"
          value={formState.airedSeason}
          onChange={handleChange}
        />
      </label>
      <label>
        Episode:
        <input
          type="number"
          name="episode"
          value={formState.episode}
          onChange={handleChange}
        />
      </label>
      <label>
        Status:
        <select name="status" value={formState.status} onChange={handleChange}>
          <option value="Not Interested">Not Interested</option>
          <option value="Interested">Interested</option>
          <option value="Watching">Watching</option>
          <option value="Watched">Watched</option>
          <option value="On Hold">On Hold</option>
          <option value="Airing">Airing</option>
          <option value="Waiting">Waiting</option>
          <option value="Will not watch">Will not watch</option>
        </select>
      </label>
      <label>
        Watched Episode:
        <input
          type="number"
          name="watchedEpisode"
          value={formState.watchedEpisode}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ShowForm;
//Press Ctrl + shift + r to refresh
