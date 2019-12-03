import React from "react";
import { Button } from "react-bootstrap";

export default class Session extends React.Component {

    toResponsibilities() {
        console.log("Responsabilities")
    }

    toSkillList() {
        console.log("toSkillList")
    }
    toSkillLevels() {
        console.log("toSkillLevels")
    }
    toSkillReviewPage() {
        console.log("toSkillReviewPage")
    }


  render() {
    return <div>
        <button type="button" class="btn btn-outline-primary" onClick={this.toResponsibilities}>Responsibilities</button>
        <button type="button" class="btn btn-outline-primary" onClick={this.toSkillList}>Skill List</button>
        <button type="button" class="btn btn-outline-primary" onClick={this.toSkillLevels}>Skill Levels</button>
        <button type="button" class="btn btn-outline-primary" onClick={this.toSkillReviewPage}>Review_Page</button>
    </div>;
  }
}
