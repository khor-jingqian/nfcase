import React, { Component } from "react";

import Post from "./Post";

import customerImage from "../resources/image.jpg";
import loading from "../resources/loading.svg";
import category from "../resources/category.png";
import shopIcon from "../resources/icon-24-shop.svg";
import phoneIcon from "../resources/phone.svg";

import logo from "../logo.svg";

import "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: 1,
      items: [],
      posts: [],
    };

    // Binding functions
    this.nextUser = this.nextUser.bind(this);
    this.prevUser = this.prevUser.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.customerId !== prevState.customerId) {
      this.fetchData();
    }
  }

  /**
   * Fetches the customer data from the URL given.
   */

  fetchData() {}

  /**
   * Prepares the posts to be appended for the customer.
   * @param {*} posts: Array containing all the posts of customer.
   */

  preparePosts(posts) {
    let count = 0;
    let postDetails = [];
    while (this.state.posts[count] != undefined) {
      let title = posts[count].title;
      title = title.charAt(0).toUpperCase() + title.slice(1);
      postDetails[count] = [title, posts[count].body];
      count++;
    }

    return [count, postDetails];
  }

  /**
   * Extracts the first name of every customer, regardless
   * of if the customer has 2 or 3 words in his/her name.
   */

  extractFirstName() {
    const nameArray = this.state.items.name.split(" ");

    if (nameArray.length == 2) {
      return nameArray[0];
    } else {
      return nameArray[1];
    }
  }

  /**
   * Prepares the tags of the customer in the appropriate
   * format.
   */

  prepareTags() {
    let tagResult = "";
    let tags = this.state.items.company.bs;
    tags = tags.split(" ");

    for (let t in tags) {
      let interim = tags[t].charAt(0).toUpperCase() + tags[t].slice(1);
      tagResult = tagResult + interim + " ";
    }

    tagResult = tagResult.trim();
    tagResult = tagResult.replace(/ /g, " \u2022 ");

    return tagResult;
  }

  /**
   * Sets the state to the next user when called.
   */

  nextUser() {
    let nextCustomer = this.state.customerId;
    nextCustomer++;
    this.setState((state) => ({
      customerId: nextCustomer,
      items: [],
      posts: [],
    }));
  }

  /**
   * Sets the state to the previous user when called.
   */

  prevUser() {
    let prevCustomer = this.state.customerId;
    prevCustomer--;
    this.setState((state) => ({
      customerId: prevCustomer,
      items: [],
      posts: [],
    }));
  }

  render() {
    var dummyTags = [
      "JavaScript",
      "ReactJS",
      "MySQL",
      "Python",
      "Java",
      "OOP",
      "Node.JS",
    ];

    return (
      <div id="flex-container">
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
              Mobile
            </p>
          </div>
          <div
            className="taggings"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              margin: "25px",
              verticalAlign: "top",
            }}
          >
            {dummyTags.map((tag) => {
              return (
                <span
                  style={{
                    padding: "5px 7px",
                    backgroundColor: "orange",
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

        <div className="listing">
          <img src={logo} className="listing-img"></img>
          <div className="listing-details">
            <p>Dummy Company</p>
            <h2>Placeholder Position (Imaginary Position)</h2>
          </div>
          <div className="listing-secondary-details">
            <p style={{ fontStyle: "italic" }}>about 15 hours ago</p>
            <span>Mobile</span>
          </div>
        </div>

        <div className="listing">
          <img src={logo} className="listing-img"></img>
          <div className="listing-details">
            <p>Dummy Company</p>
            <h2>Placeholder Position (Imaginary Position)</h2>
          </div>
          <div className="listing-secondary-details">
            <p style={{ fontStyle: "italic" }}>about 15 hours ago</p>
            <span>Mobile</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
