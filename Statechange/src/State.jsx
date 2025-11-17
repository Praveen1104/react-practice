import React, { useState } from "react";

const State = () => {
  const [states] = useState([
    {
      id: 1,
      name: "California",
      districts: [
        {
          name: "Los Angeles",
          villages: ["Village A1", "Village A2"],
        },
        {
          name: "San Diego",
          villages: ["Village B1", "Village B2"],
        },
      ],
    },
    {
      id: 2,
      name: "Texas",
      districts: [
        {
          name: "Houston",
          villages: ["Village C1", "Village C2"],
        },
        {
          name: "Dallas",
          villages: ["Village D1", "Village D2"],
        },
      ],
    },
  ]);

  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [villages, setVillages] = useState([]);
  const [selectedVillage, setSelectedVillage] = useState("");

  const handleStateChange = (e) => {
    const stateName = e.target.value;
    setSelectedState(stateName);
    const state = states.find((s) => s.name === stateName);
    setDistricts(state ? state.districts : []);
    setSelectedDistrict("");
    setVillages([]);
    setSelectedVillage("");
  };

  const handleDistrictChange = (e) => {
    const districtName = e.target.value;
    setSelectedDistrict(districtName);
    const district = districts.find((d) => d.name === districtName);
    setVillages(district ? district.villages : []);
    setSelectedVillage("");
  };

  return (
    <div>
      <h3>Select State, District and Village</h3>

      <label>State: </label>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">-- Select State --</option>
        {states.map((state) => (
          <option key={state.id} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>

      <br />
      <br />

      <label>District: </label>
      <select
        value={selectedDistrict}
        onChange={handleDistrictChange}
        disabled={!districts.length}
      >
        <option value="">-- Select District --</option>
        {districts.map((district, index) => (
          <option key={index} value={district.name}>
            {district.name}
          </option>
        ))}
      </select>

      <br />
      <br />

      <label>Village: </label>
      <select
        value={selectedVillage}
        onChange={(e) => setSelectedVillage(e.target.value)}
        disabled={!villages.length}
      >
        <option value="">-- Select Village --</option>
        {villages.map((village, index) => (
          <option key={index} value={village}>
            {village}
          </option>
        ))}
      </select>
    </div>
  );
};

export default State;
