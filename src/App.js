import React, { useEffect, useRef } from "react";
import CardContainer from "./components/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/slice/jobs";
import Filters from "./components/Filters";

const App = () => {
  const dispatch = useDispatch();
  const jobsState = useSelector((state) => state.jobs);
  const bottomBoundaryRef = useRef(null);

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

  return (
    <div className="app">
      <div>
        <Filters />
      </div>
      <div className="card-grid">
        {jobsState.data &&
          jobsState.data.map((job, index) => (
            <CardContainer key={index} job={job} />
          ))}
        <div ref={bottomBoundaryRef} style={{ height: "10px" }} />
      </div>
    </div>
  );
};

export default App;
