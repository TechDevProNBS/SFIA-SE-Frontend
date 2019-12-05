import React from "react";
import { Form, Container, Button } from "react-bootstrap";

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
    };
  }

  // Calls the deleteCustomGoal function in SessionWindow.js
  // input is the item in custom goals which needs to be deleted
  deleteCustomGoal = input => {
    this.props.deleteCustomGoal(input)
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
          this.props.addCustomGoal(document.getElementById("addCustomGoal").value)
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
    console.log(document.getElementById("addCustomGoal").value);
  }

  render() {
    // Determines the position of the words (date reminder set) underneath the slider
    var remindPosition = {
      left:
        (this.props.remindInDate / (this.state.remindIn.length - 1)) * 100 -
        3.5 +
        "%"
    };

    return (
      <Container className="ReviewPage">
        <div>
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
                <u>YOU ARE SFIA LEVEL X</u>
              </p>
            </center>
          </h2>

          <br></br>
          <br></br>
          <br></br>

          <h4>
            <p class="font-weight-bold" style={{ fontSize: 20 }}>
              Areas you are doing well in:
            </p>
          </h4>
          <br></br>
          <p style={{ fontSize: 18 }}>
            <span
              class="glyphicon glyphicon-ok"
              style={{ color: "green" }}
            ></span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x)&nbsp;&nbsp;Sample text
              sample text sample text
            </span>
          </p>
          <p style={{ fontSize: 18 }}>
            <span
              class="glyphicon glyphicon-ok"
              style={{ color: "green" }}
            ></span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y)&nbsp;&nbsp;Sample text
              sample text sample text
            </span>
          </p>
          <br></br>
          <br></br>
          <br></br>

          <h4>
            <p class="font-weight-bold" style={{ fontSize: 20 }}>
              Areas you need to improve:
            </p>
          </h4>
          <br></br>
          <p style={{ fontSize: 18 }}>
            <span
              class="glyphicon glyphicon-remove"
              style={{ color: "red" }}
            ></span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z)&nbsp;&nbsp;Sample text
              sample text sample text
            </span>
          </p>
          <p style={{ fontSize: 18 }}>
            <span
              class="glyphicon glyphicon-remove"
              style={{ color: "red" }}
            ></span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;u)&nbsp;&nbsp;Sample text
              sample text sample text
            </span>
          </p>
          <p style={{ fontSize: 18 }}>
            <span
              class="glyphicon glyphicon-remove"
              style={{ color: "red" }}
            ></span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v)&nbsp;&nbsp;Sample text
              sample text sample text
            </span>
          </p>
          <br></br>
          <br></br>
          <br></br>

          <h4>
            <p class="font-weight-bold" style={{ fontSize: 20 }}>
              Goals for the future:
            </p>
          </h4>
          <br></br>
          <Form>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z)&nbsp;&nbsp;Sample text sample text sample text"
                style={{ fontSize: 18 }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;u)&nbsp;&nbsp;Sample text sample text sample text"
                style={{ fontSize: 18 }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v)&nbsp;&nbsp;Sample text sample text sample text"
                style={{ fontSize: 18 }}
              />
            </Form.Group>
          </Form>

          {/* Maps all custom goals information here */}
          <table style={{ fontSize: 18 }}>
            {this.props.customGoals.map((item, input) => {
              var label = " " + item;
              return (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      label={label}
                    />
                  </td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>v)</td>
                  <td>&nbsp;&nbsp;</td>
                  <td>
                    <div>{label}</div>
                  </td>
                  <td>
                    <button
                      id={input}
                      onClick={() => this.deleteCustomGoal(input)}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>

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
          <br></br>
          <br></br>

          <h4>
            <p class="font-weight-bold" style={{ fontSize: 20 }}>
              Set deadline for:
            </p>
          </h4>
          <br></br>

          {/* Code for the slider (date reminder) */}
          <div className="slidersection">
            <div>1 Week &nbsp;</div>
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
              <div style={remindPosition} className="slidecontainer">
                {this.state.remindIn[this.props.remindInDate]}
              </div>
            </div>
            <div>&nbsp; 1 Year</div>
          </div>

          <Button variant="primary">Submit</Button>
        </div>
      </Container>
    );
  }
}
