import React from "react";
import { Form, Container, Button, Table } from "react-bootstrap";

import "./css/ReviewPage.css";

/*
  The review page is the final page to be looked at before a review has been made
  This page focuses on updating values related to what a user has done well and 
  what they need to improve upon. A date reminder is also set for when a follow up 
  review needs to be made by
*/

export default class ReviewPage extends React.Component {
  // Contains all information required for the slider to function
  constructor(props) {
    super(props);

    this.state = {
      remindIn: [
        "1 Week",
        "2 Weeks",
        "3 Weeks",
        "4 Weeks",
        "5 Weeks",
        "6 Weeks",
        "7 Weeks",
        "8 Weeks",
        "3 Months",
        "4 Months",
        "5 Months",
        "6 Months",
        "7 Months",
        "8 Months",
        "9 Months",
        "10 Months",
        "11 Months",
        "1 Year"
      ],
      skillLevelYesArr: [],
      skillLevelNoArr: []
    };
  }

  // Calls the deleteCustomGoal function in SessionWindow.js
  // input is the item in custom goals which needs to be deleted
  deleteCustomGoal = input => {
    this.props.deleteCustomGoal(input);
  };

  // Checks if the key pressed inside the "add custom goal" Textbox was the enterkey and
  // calls the addCustomGoal function in SessionWindow.js if true.
  addCustomGoal() {
    document
      .getElementById("addCustomGoal")
      .addEventListener("keypress", event => {
        if (
          event.keyCode == 13 &&
          document.getElementById("addCustomGoal").value !== ""
        ) {
          event.preventDefault();
          this.props.addCustomGoal(
            document.getElementById("addCustomGoal").value
          );
          document.getElementById("addCustomGoal").value = "";
        }
      });
  }

  // Updated remindInDate as the value of the slider to SessionWindow.js
  updateRemindInDate = () => {
    this.props.updateRemindInDate(
      document.getElementById("slidecontainer").value
    );
  };

  // Updates the value of remindInDate to be the length of the slider on a first render in SessionWindow.js
  componentDidMount() {
    this.props.updateRemindInDate(this.state.remindIn.length - 1);
    document.getElementById("addCustomGoal").value = "";
    this.setState({
      customGoalsTextbox: ""
    });
  }

  render() {
    // Determines the position of the words (date reminder set) underneath the slider
    var remindPosition = {
      left:
        (this.props.remindInDate / (this.state.remindIn.length - 1)) * 100 -
        50 +
        "%"
    };
    return (
      <div className="outter">
        <div className="inner">
          {/* Template Design for future inputs */}
          <h2>
            <p class="font-weight-bold" style={{ fontSize: 28 }}>
              Review
          </p>
          </h2>
          <br></br>
          <h2>
            <center>
              <p class="font-weight-bold" style={{ fontSize: 26 }}>
                <u>YOU ARE SFIA LEVEL {this.props.slLevel}</u>
              </p>
            </center>
          </h2>

          <br></br>
          <br></br>
          <br></br>
          <div className="did-well-improve-section">
            <div className="Centre-Bordered-Section">
              <div className="Bordered-Section">
                <h4 className="subHeader">Responsibilities</h4>
                <div className="border-line"></div>
                <h4>
                  <p className="subHeader">Areas you are doing well in:</p>
                </h4>
                <Table
                  style={{ fontSize: 18 }}
                  className="ReviewPage-Table"
                  striped
                  bordered
                  hover
                >
                  <tbody>
                    {this.props.yesResp.map(items => {
                      console.log(items);
                      return (
                        <div>
                          {items.map(item => (
                            <tr>
                              <td>
                                <span
                                  class="glyphicon glyphicon-ok"
                                  style={{ color: "green" }}
                                ></span>
                              </td>
                              <td>{item}</td>
                            </tr>
                          ))}
                        </div>
                      );
                    })}
                  </tbody>
                </Table>
                <div className="border-line"></div>
                <h4>
                  <p className="subHeader">Areas you need to improve:</p>
                </h4>
                <Table
                  style={{ fontSize: 18 }}
                  className="ReviewPage-Table"
                  striped
                  bordered
                  hover
                >
                  <tbody>
                    {this.props.noResp.map(items => {
                      return (
                        <div>
                          {items.map(item => (
                            <tr>
                              <td>
                                <span
                                  class="glyphicon glyphicon-remove"
                                  style={{ color: "red" }}
                                ></span>
                              </td>
                              <td>{item}</td>
                            </tr>
                          ))}
                        </div>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="Centre-Bordered-Section">
              <div className="Bordered-Section">
                <h4 className="subHeader">Skill Levels</h4>
                <div className="border-line"></div>
                <h4>
                  <p className="subHeader">Areas you are doing well in:</p>
                </h4>
                <Table
                  style={{ fontSize: 18 }}
                  className="ReviewPage-Table"
                  striped
                  bordered
                  hover
                >
                  <tbody>
                    {this.props.yesSkillList.map(items => {
                      return (
                        <div>
                          {items.map(item => (
                            <tr>
                              <td>
                                <span
                                  class="glyphicon glyphicon-ok"
                                  style={{ color: "green" }}
                                ></span>
                              </td>
                              <td>{item}</td>
                            </tr>
                          ))}
                        </div>
                      );
                    })}
                  </tbody>
                </Table>
                <div className="border-line"></div>
                <h4>
                  <p className="subHeader">Areas you need to improve:</p>
                </h4>
                <Table
                  style={{ fontSize: 18 }}
                  className="ReviewPage-Table"
                  striped
                  bordered
                  hover
                >
                  <tbody>
                    {this.props.noSkillList.map(items => {
                      return (
                        <div>
                          {items.map(item => (
                            <tr>
                              <td>
                                <span
                                  class="glyphicon glyphicon-remove"
                                  style={{ color: "red" }}
                                ></span>
                              </td>
                              <td>{item}</td>
                            </tr>
                          ))}
                        </div>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="Centre-Bordered-Section">
            <div className="Bordered-Section">
              <h4>
                <p className="subHeader">Goals for the future:</p>
              </h4>
              <br></br>
              {/* Maps all custom goals information here */}
              <Table
                style={{ fontSize: 18 }}
                className="ReviewPage-Table"
                striped
                bordered
                hover
              >
                <tbody>
                  {this.props.noResp.map(items => {
                    return (
                      <div>
                        {items.map(item => (
                          <tr>
                            {/* The Checkbox */}
                            <td style={{ width: "24px" }}>
                              <input type="checkbox" label={item} />
                            </td>
                            <td>
                              {/* Custom Goal Content */}
                              <div>{item}</div>
                            </td>
                            {/* The Delete Button */}
                          </tr>
                        ))}
                      </div>
                    );
                  })}
                </tbody>
                <tbody>
                  {this.props.noSkillList.map(items => {
                    return (
                      <div>
                        {items.map(item => (
                          <tr>
                            {/* The Checkbox */}
                            <td style={{ width: "24px" }}>
                              <input type="checkbox" label={item} />
                            </td>
                            <td>
                              {/* Custom Goal Content */}
                              <div>{item}</div>
                            </td>
                            {/* The Delete Button */}
                          </tr>
                        ))}
                      </div>
                    );
                  })}
                </tbody>
              </Table>
              {/* Maps all custom goals information here */}
              <Table
                style={{ fontSize: 18 }}
                className="ReviewPage-Table"
                striped
                bordered
                hover
              >
                <tbody>
                  {this.props.customGoals.map((item, input) => {
                    var label = " " + item;
                    return (
                      <tr>
                        {/* The Checkbox */}
                        <td style={{ width: "24px" }}>
                          <input type="checkbox" label={label} />
                        </td>
                        <td>
                          {/* Custom Goal Content */}
                          <div>{label}</div>
                        </td>
                        {/* The Delete Button */}
                        <td
                          style={{ width: "24px" }}
                          className="deleteButtonCell"
                        >
                          <button
                            id={input}
                            onClick={() => this.deleteCustomGoal(input)}
                            type="button"
                            class="btn btn-light btn-lg close"
                            aria-label="Close"
                          >
                            &times;
                        </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              {/* The Add Custom GOal textbox */}
              <p class="font-weight-bold" style={{ fontSize: 20 }}>
                <input
                  type="text"
                  placeholder="Add custom goal"
                  style={{ height: 30, width: 400, textAlign: "center" }}
                  id="addCustomGoal"
                  onKeyDown={() => this.addCustomGoal()}
                />
              </p>
            </div>
          </div>
          <h4>
            <p class="font-weight-bold" style={{ fontSize: 20 }}>
              Set deadline for:
          </p>
          </h4>
          <div className="Centre-Bordered-Section">
            {/* Code for the slider (date reminder) */}
            <div className="slidersection">
              <div className="sliderwords">1 Week</div>
              <div class="slidecontainer" className="slidecontainer">
                <input
                  type="range"
                  min="0"
                  max={this.state.remindIn.length - 1}
                  class="slider"
                  id="slidecontainer"
                  onChange={this.updateRemindInDate}
                  className="slider"
                />
                {/* Text underneath the slider */}
                <div style={remindPosition} className="slidecontainer">
                  {this.state.remindIn[this.props.remindInDate]}
                </div>
              </div>
              <div>1 Year</div>
            </div>
          </div>
        </div>
        <div className="Centre-Bordered-Section">
          {/* The Submit Button */}
          <Button variant="primary" className="Submit-Button" >
            Submit
        </Button>
        </div>
      </div>
    );
  }
}
