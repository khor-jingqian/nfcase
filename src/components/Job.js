import React, { Component } from "react";

import logo from "../logo.svg";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: props.tags,
      role: props.role,
    };
  }
  render() {
    // Layout of every Job component.
    // Map every dummy tag into a span in the div to
    // dynamically create the tags on the job listing

    return (
      <div className="listing">
        <img src={logo} className="listing-img"></img>
        <div className="listing-details">
          <p>Dummy Company</p>
          <h2>Placeholder Position (Imaginary Position)</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "15px",
          }}
        >
          <p style={{ padding: "10px", fontStyle: "italic" }}>
            about 15 hours ago
          </p>
          <p
            style={{
              padding: "10px",
              backgroundColor: "greenyellow",
              color: "darkgreen",
              borderRadius: "15px",
            }}
          >
            {this.state.role}
          </p>
        </div>
        <div
          className="taggings"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            margin: "25px",
          }}
        >
          {this.state.tags.map((tag) => {
            return (
              <span
                style={{
                  padding: "5px 7px",
                  backgroundColor: "wheat",
                  margin: "9px",
                  display: "inline-block",
                  borderRadius: "5px",
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Job;
