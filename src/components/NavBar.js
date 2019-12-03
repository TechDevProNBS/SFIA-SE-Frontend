import React from "react";

/*
    Lists the Pages in a session
    When a button is clicked the name of the page is sent to props (in Session.js)
*/

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  //   When the Responsabilities button is clicked send "Responsabilities" to props (in Session.js)"
  toResponsibilities = event => {
    this.props.handlePageChange("Responsabilities");
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
    return (
      <div>
        {/* Responsabilities button */}
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={this.toResponsibilities}
        >
          Responsibilities
        </button>

        {/* SkillList button */}
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={this.toSkillList}
        >
          Skill List
        </button>

        {/* SkillLevels button */}
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={this.toSkillLevels}
        >
          Skill Levels
        </button>

        {/* SkillReviewPage button */}
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={this.toSkillReviewPage}
        >
          Review_Page
        </button>
      </div>
    );
  }
}
