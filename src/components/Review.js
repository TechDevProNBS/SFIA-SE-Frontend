import React from "react";
import { Form, Container, Button, Table } from "react-bootstrap";

import "./css/Review.css";

export default class Review extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Empty layout so that the page compiles on the first render
     */
    this.state = {
      report: [
        {
          great_skills: [""],
          improve_skills: [""],
          great_responsibilities: [""],
          improve_responsibilities: [""],
          goals: [""]
        }
      ],

      // id: "5dee1c821c9d440000fedcab"
    };
  }

  /**
   * Get request called after page has been rendered once
   */
  componentDidMount = () => {
    const { id } = this.props.match.params
    var uri = (process.env.ADDRESS ? `http://${process.env.ADDRESS}` : `http://localhost:2500`) + `/API/reports/getReportById/${id}`
    fetch(uri)
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
                className="Review-Table"
                striped
                bordered
                hover
              >
                {/* Mapping responsibilities that the user is doing well in */}
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
                className="Review-Table"
                striped
                bordered
                hover
              >
              {/* Mapping responsibilities that the user could improve upon */}
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
                className="Review-Table"
                striped
                bordered
                hover
              >
              {/* Mapping skills that the user is doing well in */}
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
                className="Review-Table"
                striped
                bordered
                hover
              >
              {/* Mapping skills that the user could improve upon */}
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
                className="Review-Table"
                striped
                bordered
                hover
              >

                {/* Mapping future goals that the user has set for themselves */}
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
