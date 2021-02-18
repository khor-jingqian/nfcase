import React, { Component } from "react";

import Job from "./Job";

import "./Layout.css";

// Layout consists of Job components that are
// arranged by flex div

class Layout extends Component {
  render() {
    return (
      <div id="flex-container">
        <Job
          tags={[
            "JavaScript",
            "ReactJS",
            "MySQL",
            "Python",
            "Java",
            "OOP",
            "Node.JS",
          ]}
          role={"Mobile"}
        ></Job>
        <Job
          tags={["AWS", "Flutter", "Dart", "Ruby", "Java", "OOP", "Node.JS"]}
          role={"Fullstack"}
        ></Job>

        <Job
          tags={[
            "Swift",
            "SQL",
            "MongoDB",
            "Java",
            "Scrum",
            "Agile",
            "Node.JS",
          ]}
          role={"Backend"}
        ></Job>
      </div>
    );
  }
}

export default Layout;
