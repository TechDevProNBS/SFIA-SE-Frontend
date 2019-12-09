import React from "react";

import "./css/NavBar.css";

/*
    Lists the Pages in a session
    When a button is clicked the name of the page is sent to props (in Session.js)
*/

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  //   When the Responsibilities button is clicked send "Responsibilities" to props (in Session.js)"
  toResponsibilities = event => {
    this.props.handlePageChange("Responsibilities");
  };

  //   When the SkillList button is clicked send "SkillList to props (in Session.js)"
  toSkillList = event => {
    this.props.handlePageChange("SkillList");
  };

  //   When the SkillLevels button is clicked send "SkillLevels" to props (in Session.js)"
  toSkillLevels = event => {
    this.props.handlePageChange("SkillLevels");
  };

  //   When the SkillReviewPage button is clicked send "SkillReviewPage" to props (in Session.js)"
  toSkillReviewPage = event => {
    this.props.handlePageChange("SkillReviewPage");
  };

  render() {
    var progressBarStyle = {
      width: (this.props.Carousel_Page / 3) * 100 + "%"
    };

    var activeButton = "btn btn-outline-primary active";
    var nonActiveButton = "btn btn-outline-primary";

    var buttonPages = [
      nonActiveButton,
      nonActiveButton,
      nonActiveButton,
      nonActiveButton
    ];

    buttonPages[this.props.Carousel_Page] = activeButton;
    return (
      <div className="NavBar-Container">
        <div className="Progress-Bar">
          <div
            className="Progress-Bar-Completed"
            style={progressBarStyle}
          ></div>
        </div>
        <div className="Buttons-Container">
          {/* Responsibilities button */}
          <div className="Button">
            <button
              type="button"
              class={buttonPages[0]}
              onClick={this.toResponsibilities}
              style={this.responsibilitiesButton}
            >
              &nbsp;&nbsp;&nbsp;
            </button>
            <div>Responsibilities</div>
          </div>

          {/* SkillList button */}

          <div className="Button">
            <button
              type="button"
              class={buttonPages[1]}
              onClick={this.toSkillList}
            >
              &nbsp;&nbsp;&nbsp;
            </button>
            <div>Skill List</div>
          </div>

          {/* SkillLevels button */}

          <div className="Button">
            <button
              type="button"
              class={buttonPages[2]}
              onClick={this.toSkillLevels}
            >
              &nbsp;&nbsp;&nbsp;
            </button>
            <div>Skill Levels</div>
          </div>

          {/* SkillReviewPage button */}

          <div className="Button">
            <button
              type="button"
              class={buttonPages[3]}
              onClick={this.toSkillReviewPage}
            >
              &nbsp;&nbsp;&nbsp;
            </button>
            <div>Review_Page</div>
          </div>
        </div>
      </div>
    );
  }
}
