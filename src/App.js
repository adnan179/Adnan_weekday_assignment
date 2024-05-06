import React, { useEffect, useRef, useState } from "react";
import CardContainer from "./components/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/slice/jobs";
import Filters from "./components/Filters";
import { current } from "@reduxjs/toolkit";

const App = () => {
  const dispatch = useDispatch();
  const jobsState = useSelector((state) => state.jobs);
  const bottomBoundaryRef = useRef(null);

  const [company, setCompany] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !jobsState.isLoading &&
          !jobsState.isError
        ) {
          dispatch(fetchJobs());
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (bottomBoundaryRef.current) {
      observer.observe(bottomBoundaryRef.current);
    }

    return () => {
      if (bottomBoundaryRef.current) {
        observer.unobserve(bottomBoundaryRef.current);
      }
    };
  }, [jobsState.isLoading, jobsState.isError, dispatch]);

  const handleSearchChange = (searchValue) => {
    setCompany(searchValue);
  };
  //function to filter jobs
  const filterJobs = (minExp, minSalary, location) => {
    let Jobs = [...jobsState.data];

    if (minExp) {
      Jobs = Jobs.filter((job) => job.minExp >= parseInt(minExp));
    }
    if (minSalary) {
      Jobs = Jobs.filter((job) => job.minJdSalary >= parseInt(minSalary));
    }
    if (location) {
      Jobs = Jobs.filter((job) => job.location === location);
    }
    const uniqueJobs = new Set(Jobs);

    // Convert the Set back into an array
    const uniqueJobsArray = Array.from(uniqueJobs);
    setFilteredJobs(uniqueJobsArray);
  };

  return (
    <div className="app">
      <div className="flex">
        <Filters
          onSearchChange={handleSearchChange}
          handleIsFiltered={() => setIsFiltered(true)}
          filterJobs={filterJobs}
        />
      </div>
      <div className="card-grid">
        {!company && !isFiltered
          ? jobsState.data.map((job, index) => (
              <CardContainer key={index} job={job} />
            ))
          : isFiltered && !company
          ? filteredJobs.map((job, index) => (
              <CardContainer key={index} job={job} />
            ))
          : Array.from(
              new Set(
                jobsState.data
                  .filter((job) =>
                    job.companyName
                      .toLowerCase()
                      .includes(company.toLowerCase())
                  )
                  .map((job) => job.companyName.toLowerCase())
              )
            ).map((companyName, index) => {
              const job = jobsState.data.find(
                (job) => job.companyName.toLowerCase() === companyName
              );
              return <CardContainer key={index} job={job} />;
            })}

        <div ref={bottomBoundaryRef} style={{ height: "10px" }} />
      </div>
    </div>
  );
};

export default App;
