import React, { useState } from "react";
let jobs = [];

function Job(props) {
  const job = props.job;
  return (
    <div className="jobCard">
      <img src={job.logoImg} width="15%" />
      <p>
        <b> {job.company}</b> <br />
        {job.name} - {job.expLevel}
      </p>
      <p>
        {job.activeFrom.split("T")[0]} <br /> {job.jobType}
      </p>
      <small>
        <i></i> {job.address}
      </small>
      <br />
      <a href={job.redirectJobUrl} target="blank">
        More info
      </a>
    </div>
  );
}
export default Job;
