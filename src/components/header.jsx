import React from "react";
export default function Header() {
  return (
    <nav>
      <div className="flex">
        <p>TechLead</p>
        <select className="headerMenu">
          <option value="All Programs">All Programs</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Data Science">Data Science</option>{" "}
          <option value="Software Engineering">Software Engineering</option>{" "}
          <option value="Quality Assurance">Quality Assurance</option>{" "}
          <option value="BI Analyst">BI Analyst</option>
        </select>
      </div>
      <div>
        <a href="#CTA" className="primaryButton">
          Book a call
        </a>
        <a href="#">
          Log in{" "}
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjciIGhlaWdodD0iNCIgdHJhbnNmb3JtPSJtYXRyaXgoNC4zNzExNGUtMDggMSAxIC00LjM3MTE0ZS0wOCA0LjM3MTE0ZS0wOCA0KSIgc3Ryb2tlPSIjMTMxMzEzIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMTAiIHRyYW5zZm9ybT0ibWF0cml4KDQuMzcxMTRlLTA4IDEgMSAtNC4zNzExNGUtMDggNiA3KSIgZmlsbD0iIzEzMTMxMyIvPgo8cmVjdCB3aWR0aD0iMyIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09Im1hdHJpeCg0LjM3MTE0ZS0wOCAxIDEgLTQuMzcxMTRlLTA4IDEzIDkpIiBmaWxsPSIjMTMxMzEzIi8+CjxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjIiIHRyYW5zZm9ybT0ibWF0cml4KDQuMzcxMTRlLTA4IDEgMSAtNC4zNzExNGUtMDggOSA5KSIgZmlsbD0iIzEzMTMxMyIvPgo8L3N2Zz4K"
            alt="key"
          />
        </a>
      </div>
    </nav>
  );
}
