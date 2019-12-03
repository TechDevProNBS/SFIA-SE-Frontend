import React from "react";
import Responsabilities from "./Responsabilities"
import SkillList from "./SkillList"
import SkillLevel from "./SkillLevel"
import ReviewPage from "./ReviewPage"

export default class SessionWindow extends React.Component {
  render() {
    return (
      <div>
          <Responsabilities />
          <SkillList />
          <SkillLevel />
          <ReviewPage />
        
      </div>
    );
  }
}
