import React, { useState } from "react";

const BreedSelector = ({ breeds, setSelectedBreeds }) => {
  const [selected, setSelected] = useState([]);

  const handleSelectChange = (e) => {
    const options = e.target.options;
    const selectedBreeds = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedBreeds.push(options[i].value);
      }
    }
    setSelected(selectedBreeds);
    setSelectedBreeds(selectedBreeds);
  };

  return (
    <div>
      <label htmlFor="breed-select">Select Dog Breeds:</label>
      <select
        id="breed-select"
        multiple={true}
        value={selected}
        onChange={handleSelectChange}
        style={{ width: "100%", height: "150px" }}
      >
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedSelector;
