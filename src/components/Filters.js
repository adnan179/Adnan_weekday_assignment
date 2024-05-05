import React, { useState, useEffect } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Experiences, Locations, Salaries } from "../data/data";

const Filters = ({ jobsData, handleFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    experience: "",
    salary: "",
    location: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const allJobs = useSelector((state) => state.jobs.data);

  //menu-items for the filters
  const experiences = Array.from(
    new Set(Experiences.flatMap((job) => job))
  ).filter(Boolean);
  const salaries = Array.from(new Set(Salaries.flatMap((job) => job))).filter(
    Boolean
  );
  const locations = Array.from(new Set(Locations.flatMap((job) => job))).filter(
    Boolean
  );

  //functions to handle changes in the select tags and input tag
  const handleExperienceChange = (event) => {
    setSelectedFilters({ ...selectedFilters, experience: event.target.value });
  };

  const handleSalaryChange = (event) => {
    setSelectedFilters({ ...selectedFilters, salary: event.target.value });
  };

  const handleLocationChange = (event) => {
    setSelectedFilters({ ...selectedFilters, location: event.target.value });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="filters-container">
      <div className="filters-container__selects">
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="experience-label">Experience</InputLabel>
          <Select
            labelId="experience-label"
            id="experience"
            label="Experience"
            value={selectedFilters.experience}
            onChange={handleExperienceChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {experiences.map((exp, index) => (
              <MenuItem key={index} value={exp}>
                {exp}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="salary-label">Salary</InputLabel>
          <Select
            labelId="salary-label"
            id="salary"
            label="Salary"
            value={selectedFilters.salary}
            onChange={handleSalaryChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {salaries.map((sly, index) => (
              <MenuItem key={index} value={sly}>
                {sly}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="locations-label">Locations</InputLabel>
          <Select
            labelId="locations-label"
            id="locations"
            label="Locations"
            value={selectedFilters.location}
            onChange={handleLocationChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {locations.map((loc, index) => (
              <MenuItem key={index} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <button className="filter-btn">Apply Filters</button>
      </div>
      <div className="filters-container__searchbar">
        <input
          placeholder="Search company name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default Filters;
