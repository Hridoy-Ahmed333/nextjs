"use client";
import React, { useState } from "react";
import "./ShowForm.css";

const MangaForm = ({ content }) => {
  const [formState, setFormState] = useState({
    name: "",
    otherName: "",
    description: "",
    image: null, // Adjusted to handle file uploads
    year: "",
    season: "",
    chapter: 1, // Default value adjusted to match schema
    status: "",
    readedChapter: 0, // Renamed from watchedEpisode to match schema
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setFormState((prevState) => ({
      ...prevState,
      image: event.target.files?.[0], // Directly set the image file
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    Object.keys(formState).forEach((key) => {
      formData.append(key, formState[key]);
    });

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
      // Handle successful response
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      // Handle error
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
          onChange={handleImageChange} // Use a separate handler for image
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
        Season:
        <input
          type="text"
          name="season"
          value={formState.season}
          onChange={handleChange}
        />
      </label>
      <label>
        Chapter:
        <input
          type="number"
          name="chapter"
          value={formState.chapter}
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
        Readed Chapter:
        <input
          type="number"
          name="readedChapter"
          value={formState.readedChapter}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MangaForm;
//Press Ctrl + shift + r to refresh
