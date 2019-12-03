import React from "react";
import Responsabilities from "./Responsabilities";
import SkillList from "./SkillList";
import SkillLevel from "./SkillLevel";
import ReviewPage from "./ReviewPage";

import "./css/SessionWindow.css"

/*
  Calls all pages used during a session and determines
  which to display based on this.props.Carousel_Page
  inputed from Session.js
*/
export default class SessionWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // edits Carousel_Style to display the page decieded by Session.js
    var Carousel_Style = {
      right: this.props.Carousel_Page * 100 + "%"
    }
    return (
      <div className="SessionWindow">
        <div className="Carousel" style={Carousel_Style}>
          {/* Calls each of the pages needed for a session */}
          <div className="Carousel_Item">
            <Responsabilities />
          </div>
          <div className="Carousel_Item">
            <SkillList />
          </div>
          <div className="Carousel_Item">
            <SkillLevel />
          </div>
          <div className="Carousel_Item">
            <ReviewPage />
          </div>
        </div>
      </div>
    );
  }
}
