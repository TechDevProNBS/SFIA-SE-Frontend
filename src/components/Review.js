import React from "react";
import { Form, Container, Button, Table } from "react-bootstrap";

import "./css/Review.css";

export default class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      report: [
        {
          great_skills: [""],
          improve_skills: [""],
          great_responsibilities: [""],
          improve_responsibilities: [""],
          goals: [""]
        }
      ]
    };
  }

  componentDidMount = () => {
    fetch(`http://localhost:2500/API/getReportList`)
      .then(response => response.json())
      .then(SkillList_info =>
        this.setState(
          { report: SkillList_info },
          console.log(SkillList_info[0].great_skills)
        )
      );
  };

  render() {
    return (
      <div className="ReviewPage">
        {/* <div>{this.state.report[0]._id}</div> */}
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
                  {this.state.report[0].great_responsibilities.map(item => {
                    console.log(item);
                    return (
                      <tr>
                        <td>
                          <span
                            class="glyphicon glyphicon-ok"
                            style={{ color: "green" }}
                          ></span>
                        </td>
                        <td>{item.responsibility_criterion}</td>
                      </tr>
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
                  {this.state.report[0].improve_responsibilities.map(item => {
                    console.log(item);
                    return (
                      <tr>
                        <td>
                          <span
                            class="glyphicon glyphicon-remove"
                            style={{ color: "red" }}
                          ></span>
                        </td>
                        <td>{item.responsibility_criterion}</td>
                      </tr>
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
                  {this.state.report[0].great_skills.map(item => {
                    console.log(item);
                    return (
                      <tr>
                        <td>
                          <span
                            class="glyphicon glyphicon-ok"
                            style={{ color: "green" }}
                          ></span>
                        </td>
                        <td>{item.skill_criterion}</td>
                      </tr>
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
                  {this.state.report[0].improve_skills.map(item => {
                    console.log(item);
                    return (
                      <tr>
                        <td>
                          <span
                            class="glyphicon glyphicon-remove"
                            style={{ color: "red" }}
                          ></span>
                        </td>
                        <td>{item.skill_criterion}</td>
                      </tr>
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
            <Table
                style={{ fontSize: 18 }}
                className="ReviewPage-Table"
                striped
                bordered
                hover
              >
                <tbody>
                  {this.state.report[0].goals.map(item => {
                    console.log(item);
                    return (
                      <tr>
                        <td>
                          <span
                            class="glyphicon glyphicon-remove"
                            style={{ color: "red" }}
                          ></span>
                        </td>
                        <td>{item.criterion}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
          </div>
        </div>
      </div>
    );
  }
}
