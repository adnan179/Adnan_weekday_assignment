import React, { useState } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { useSelector } from "react-redux";

const Filters = ({ onSearchChange, handleIsFiltered, filterJobs }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    experience: "",
    salary: "",
    location: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const jobsData = useSelector((state) => state.jobs.data);

  // Function to extract minExp from the given data and sort
  const extractMinExp = (jdList) => {
    const minExpList = jdList.reduce((minExpArr, job) => {
      if (job.minExp !== null && !minExpArr.includes(job.minExp)) {
        minExpArr.push(job.minExp);
      }
      return minExpArr;
    }, []);
    minExpList.sort((a, b) => a - b);
    return minExpList;
  };

  // Function to extract minJdSalary from the given data and sort
  const extractMinJdSalary = (jdList) => {
    const minJdSalaryList = jdList.reduce((minJdSalaryArr, job) => {
      if (
        job.minJdSalary !== null &&
        !minJdSalaryArr.includes(job.minJdSalary)
      ) {
        minJdSalaryArr.push(job.minJdSalary);
      }
      return minJdSalaryArr;
    }, []);
    minJdSalaryList.sort((a, b) => a - b);
    return minJdSalaryList;
  };

  // Function to extract locations from the given data
  const extractLocations = (jdList) => {
    const locationsList = jdList.reduce((locationsArr, job) => {
      if (job.location !== null && !locationsArr.includes(job.location)) {
        locationsArr.push(job.location);
      }
      return locationsArr;
    }, []);
    return locationsList;
  };

  // Usage
  const minExpList = extractMinExp(jobsData);
  const minJdSalaryList = extractMinJdSalary(jobsData);
  const locationsList = extractLocations(jobsData);

  //functions to handle changes in the select tags and input tag
  const handleExperienceChange = (event) => {
    const experience = event.target.value;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      experience: experience,
    }));
  };

  const handleSalaryChange = (event) => {
    const salary = event.target.value;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      salary: salary,
    }));
  };

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      location: location,
    }));
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <div className="filters-container">
      <div className="filters-container__selects">
        <FormControl sx={{ minWidth: 160 }}>
          <InputLabel id="experience-label">Min Experience</InputLabel>
          <Select
            labelId="experience-label"
            id="experience"
            label="Experience"
            value={selectedFilters.experience}
            onChange={handleExperienceChange}
            className="filters-container__Select"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {minExpList.map((exp, index) => (
              <MenuItem key={index} value={exp}>
                {exp}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 130 }}>
          <InputLabel id="salary-label">Min Salary</InputLabel>
          <Select
            labelId="salary-label"
            id="salary"
            label="Salary"
            value={selectedFilters.salary}
            onChange={handleSalaryChange}
            className="filters-container__Select"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {minJdSalaryList.map((sly, index) => (
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
            className="filters-container__Select"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {locationsList.map((loc, index) => (
              <MenuItem key={index} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <button
          className="filter-btn"
          onClick={() => {
            handleIsFiltered();
            filterJobs(
              selectedFilters.experience,
              selectedFilters.salary,
              selectedFilters.location
            );
          }}
        >
          Apply Filters
        </button>
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
