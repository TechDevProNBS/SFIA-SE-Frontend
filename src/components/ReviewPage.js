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
  state = {
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
    remindInDate: 0
  };

  // Updated remindInDate to the value of the slider
  updateRemindInDate = () => {
    this.setState({
      remindInDate: document.getElementById("slidecontainer").value
    });
  };

  // Updates the value of remindInDate to be the length of the slider on a first render
  componentDidMount() {
    this.setState({
      remindInDate: this.state.remindIn.length - 1
    });
  }

  render() {
    // Determines the position of the words (date reminder set) underneath the slider
    var remindPosition = {
      left: (this.state.remindInDate / (this.state.remindIn.length - 1)) * 100 - 3.5 + "%"
    }
    return (
      <Container className="ReviewPage">
        <div>
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

            <p class="font-weight-bold" style={{ fontSize: 20 }}>
              <input
                type="text"
                placeholder="Add custom goal"
                style={{ height: 30, width: 400, textAlign: "center" }}
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
                  // value="0"
                  class="slider"
                  id="slidecontainer"
                  onChange={this.updateRemindInDate}
                  className="slider"
                />
                <div style={remindPosition} className="slidecontainer">{this.state.remindIn[this.state.remindInDate]}</div>
              </div>
              <div>&nbsp; 1 Year</div>
            </div>

            <Button variant="primary">Submit</Button>
          </Form>
        </div>
      </Container>
    );
  }
}
