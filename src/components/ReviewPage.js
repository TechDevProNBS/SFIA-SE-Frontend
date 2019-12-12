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
      skillLevelNoArr: [],
      array: []
    };
  }

  // Calls the deleteCustomGoal function in SessionWindow.js
  // input is the item in custom goals which needs to be deleted
  deleteCustomGoal = input => {
    this.props.deleteCustomGoal(input);
    this.state.array.splice(this.state.array.indexOf(input), 1);
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
          this.props.addCustomGoal(document.getElementById("addCustomGoal").value);
          this.state.array.push(document.getElementById("addCustomGoal").value
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
  submitReview = () => {
    console.log(this.props.yesResp);
    this.formattingGreat_Skills()

    // console.log(this.props.noResp);
    // console.log(this.props.yesSkillList);
    // console.log(this.props.noSkillList);
    // console.log(this.props.customGoals);
    // console.log(this.props.slLevel);

    // this.props.reviewToDB
    // this.props.reviewToP1
  }

  boxChecked = (input) => {
    var a = document.getElementById(`${input}`);
    if (a.checked == true) {
      this.state.array.push(input);
    } else {
      while (this.state.array.indexOf(input) !== -1) {
        this.state.array.splice(this.state.array.indexOf(input), 1);
      }
    }
  }

  formattingGreat_Skills = () => {
    var arr = this.props.yesResp;
    var newArr = [];
    arr.forEach(element => {
      element.forEach(item => {
        var value =
        {
          "responsibility_criterion": item
        }
        newArr.push(value)
      })
    })
    console.log(newArr);

    var arr2 = this.props.noResp;
    var newArr2 = [];
    arr2.forEach(element => {
      element.forEach(item => {
        var value =
        {
          "responsibility_criterion": item
        }
        newArr2.push(value)
      })
    })
    console.log(newArr2);

    var arr3 = this.props.yesSkillList;
    var newArr3 = [];
    arr3.forEach(element => {
      element.forEach(item => {
        var value =
        {
          "skill_criterion": item
        }
        newArr3.push(value)
      })
    })
    console.log(newArr3);

    var arr4 = this.props.noSkillList;
    var newArr4 = [];
    arr4.forEach(element => {
      element.forEach(item => {
        var value =
        {
          "skill_criterion": item
        }
        newArr4.push(value)
      })
    })
    console.log(newArr4);

    // var arr5 = this.props.customGoals;
    // var newArr5 = [];
    // arr5.forEach(element => {
    //   element.forEach(item => {
    //     var value = 
    //     {
    //       "criterion": item
    //     }
    //     newArr5.push(value)
    //   })
    // })
    console.log(this.state.array);

    var toPost =
    {
      "level": this.props.slLevel,
      "great_skills": newArr3,
      "improve_skills": newArr4,
      "great_responsibilities": newArr,
      "improve_responsibilities": newArr2,
      // "goals": newArr5
    }

    console.log(toPost);

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
                            <span><div Key={item}> <input type="checkbox" id={(item)} onChange={() => this.boxChecked(item)} /></div></span>
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
                            <span><div Key={item}> <input type="checkbox" id={(item)} onChange={() => this.boxChecked(item)} /></div></span>
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
                        <td>
                          {/* Custom Goal Content */}
                          <div>{label}</div>
                        </td>
                        {/* The Delete Button */}

                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              {/* The Add Custom Goal textbox */}
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
          <Button variant="primary" className="Submit-Button" onClick={this.submitReview} >
            Submit
        </Button>
        </div>
      </div>
    );
  }
}
