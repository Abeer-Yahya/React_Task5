import React, { useState, useEffect } from "react";
import axios from "axios";
import Job from "../components/Job";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://devitjobs.us/api/jobsLight`,
      headers: {
        Accept: "application/vnd.api+json",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setJobs([...response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>
        <div>
          <div className="container">
            {jobs.map((job, i) => {
              return <Job key={i} job={job} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
