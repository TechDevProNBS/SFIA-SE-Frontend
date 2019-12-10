import React from "react";
import Responsibilities from "./Responsibilities";
import SkillList from "./SkillList";
import SkillLevel from "./SkillLevel";
import ReviewPage from "./ReviewPage";

import "./css/SessionWindow.css";

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
      yResp: [],
      nResp: [],
      yesSkillList: [],
      noSkillList: [],
      lvl: "",
      Carousel_Page: "",
      selectedSkill: [],
      refreshSkillLevel: false
    };

  }
  //Enters the new array from skill list page into this.state
  handleForm = newArray => {
    var skillList = this.state.newSkillList;
    // skillList = []
    skillList.push(newArray);
    var uniqueSL = Array.from(new Set(skillList));
    this.setState({
      newSkillList: uniqueSL,
      refreshSkillLevel: true,
      Carousel_Page: 2
    });
    this.getList();
  };
  // Deletes a Custom Goal, called from ReviewPage.js
  deleteCustomGoal = input => {
    var newCustomGoals = this.state.customGoals;
    newCustomGoals.splice(input, 1);
    this.setState({
      customGoals: newCustomGoals
    });
  };

  // Adds a Custom Goal to be used in ReviewPage.js. Called from ReviewPage.js
  addCustomGoal = input => {
    var newCustomGoals = this.state.customGoals;
    newCustomGoals.push(input);
    this.setState({
      customGoals: newCustomGoals
    });
  };

  skillLevelRefreshed = () => {
    this.setState({
      refreshSkillLevel: false
    })
  }


  // Updated remindInDate to the value of the slider
  updateRemindInDate = event => {
    this.setState({
      remindInDate: event
    });
  };

  pushResp = (newArr) => {
    var resp = this.state.yResp;
    resp = [];
    resp.push(newArr);
    this.setState({
      yResp: resp
    });
  }

  pushResp1 = (newArr) => {
    var resp = this.state.nResp;
    resp = [];
    resp.push(newArr);
    this.setState({
      nResp: resp
    });
  }

  pushLvl = (level) => {
    this.setState({
      lvl: level
    });
  }

  pushYesSL = (newArr) => {
    var skillLevel = this.state.yesSkillList;
    skillLevel = [];
    skillLevel.push(newArr);
    this.setState({
      yesSkillList: skillLevel
    });
  }

  pushNoSL = (newArr) => {
    var skillLevel = this.state.noSkillList;
    skillLevel = [];
    skillLevel.push(newArr);
    this.setState({
      noSkillList: skillLevel
    });
  }

  getList = () => {
    fetch(`http://localhost:5500/API/showSkillLevelIn?skill_name=${this.state.newSkillList}`)
      .then(response => response.json())
      .then(skillname => this.setState({ selectedSkill: skillname }))
  }


  render() {
    // edits Carousel_Style to display the page decieded by Session.js
    var Carousel_Style = {
      right: this.props.Carousel_Page * 100 + "%"
    };
    return (
      <div className="SessionWindow">
        <div className="Carousel" style={Carousel_Style}>
          {/* Calls each of the pages needed for a session */}
          <div className="Carousel_Item">
            <Responsibilities
              handlePageChange={this.props.handlePageChange}
              pushResp={this.pushResp}
              pushResp1={this.pushResp1}
              pushLvl={this.pushLvl} />
          </div>
          <div className="Carousel_Item">
            <SkillList
              handleForm={this.handleForm}
              handlePageChange={this.props.handlePageChange}
              getList={this.getList}
            />
          </div>
          <div className="Carousel_Item">
            <SkillLevel
              newSkillList={this.state.newSkillList}
              level={this.state.lvl}
              selectedSkill={this.state.selectedSkill}
              refreshSkillLevel={this.state.refreshSkillLevel}
              Carousel_Page={this.state.Carousel_Page}
              skillLevelRefreshed={this.skillLevelRefreshed}
              pushYesSL={this.pushYesSL}
              pushNoSL={this.pushNoSL}
              handlePageChange={this.props.handlePageChange}
            />
          </div>
          <div className="Carousel_Item">
            {/* 
            Send the value for the slider as well as the function used to update the slider into ReviewPage.js 
            Send functions to edit customGoals as well as customGoals itself
            */}
            <ReviewPage
              remindInDate={this.state.remindInDate}
              updateRemindInDate={this.updateRemindInDate}
              deleteCustomGoal={this.deleteCustomGoal}
              addCustomGoal={this.addCustomGoal}
              customGoals={this.state.customGoals}
              yesResp={this.state.yResp}
              noResp={this.state.nResp}
              level={this.state.lvl}
              yesSkillList={this.state.yesSkillList}
              noSkillList={this.state.noSkillList}
            />
          </div>
        </div>
      </div>
    );
  }
}
