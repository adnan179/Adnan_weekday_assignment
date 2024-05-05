import React, { useEffect, useRef, useState } from "react";
import CardContainer from "./components/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/slice/jobs";
import Filters from "./components/Filters";

const App = () => {
  const dispatch = useDispatch();
  const jobsState = useSelector((state) => state.jobs);
  const bottomBoundaryRef = useRef(null);

  const [company, setCompany] = useState(null);

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
    console.log(company);
  };

  return (
    <div className="app">
      <div>
        <Filters onSearchChange={handleSearchChange} />
      </div>
      <div className="card-grid">
        {!company &&
          jobsState.data &&
          jobsState.data.map((job, index) => (
            <CardContainer key={index} job={job} />
          ))}
        {company &&
          jobsState.data &&
          jobsState.data
            .filter((job) =>
              job.companyName.toLowerCase().includes(company.toLowerCase())
            )
            .map((job, index) => <CardContainer key={index} job={job} />)}

        <div ref={bottomBoundaryRef} style={{ height: "10px" }} />
      </div>
    </div>
  );
};

export default App;
