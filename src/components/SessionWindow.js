import React from "react";
import Responsibilities from "./Responsibilities";
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

    this.state = {
      remindInDate: 0,
      customGoals: [],
      newSkillList: [],
      newResp: []
    };

  }


  // Updated remindInDate to the value of the slider
  updateRemindInDate = event => {
    this.setState({
      remindInDate: event
    });
  };

  pushResp = (newArr) => {
    var resp = this.state.newResp;
    resp.push(newArr);
    this.setState({
      newResp: resp
    });
    // alert(this.state.newResp)
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
            <Responsibilities
            pushResp={this.pushResp} />
          </div>
          <div className="Carousel_Item">
            <SkillList />
          </div>
          <div className="Carousel_Item">
            <SkillLevel />
          </div>
          <div className="Carousel_Item">
            {/* Send the value for the slider as well as the function used to update the slider into ReviewPage.js */}
            <ReviewPage remindInDate={this.state.remindInDate} updateRemindInDate={this.updateRemindInDate} />
          </div>
        </div>
      </div>
    );
  }
}
