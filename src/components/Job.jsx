import React, { useState } from "react";
let jobs = [];

function Job(props) {
  const job = props.job;
  return (
    <div className="jobCard">
      {!job.logoImg ? (
        <img
          src="https://s3-us-west-2.amazonaws.com/procure-now-public/assets/unknown-business-logo.png"
          width="15%"
        />
      ) : (
        <img src={job.logoImg} width="15%" />
      )}
      <p>
        <b> {job.company}</b> <br />
        {job.jobType}
        <br />
        {job.name} - {job.expLevel}
      </p>
      <p>
        {job.activeFrom.split("T")[0]} <br />
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
