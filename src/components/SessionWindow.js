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
      slLvl: "",
      selectedSkill: []
    };

  }
  //Enters the new array from skill list page into this.state
  handleForm = newArray => {
    var skillList = this.state.newSkillList;
    skillList.push(newArray);
    var uniqueSL = Array.from(new Set(skillList));
    this.setState({
      newSkillList: uniqueSL,
      refreshSkillLevel: true
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

  // Updated remindInDate to the value of the slider
  updateRemindInDate = event => {
    this.setState({
      remindInDate: event
    });
  };

  /**
   * Gets yes array from responsibilities and sets in state
   */
  pushResp = (newArr) => {
    var resp = this.state.yResp;
    resp = [];
    resp.push(newArr);
    this.setState({
      yResp: resp
    });
  }

  /**
   * Gets no array from responsibilities and sets in state
   */
  pushResp1 = (newArr) => {
    var resp = this.state.nResp;
    resp = [];
    resp.push(newArr);
    this.setState({
      nResp: resp
    });
  }

  /**
   * Gets level from responsibilities and sets in state
   */
  pushLvl = (level) => {
    this.setState({
      lvl: level
    });
  }

  /**
   * Gets yes array from skill level and sets in state
   */
  pushYesSL = (newArr) => {
    var skillLevel = this.state.yesSkillList;
    skillLevel = [];
    skillLevel.push(newArr);
    this.setState({
      yesSkillList: skillLevel
    });
  }

  /**
   * Gets no array from skill level and sets in state
   */
  pushNoSL = (newArr) => {
    var skillLevel = this.state.noSkillList;
    skillLevel = [];
    skillLevel.push(newArr);
    this.setState({
      noSkillList: skillLevel
    });
  }

  /**
   * Gets level from skill level and sets in state
   */
  pushSlLvl = (level) => {
    this.setState({
      slLvl: level
    });
  }

  /**
   * Fetchs skill list criteria from database based on selected skill
   */
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
              pushSlLvl={this.pushSlLvl}
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
              slLevel={this.state.slLvl}
              yesSkillList={this.state.yesSkillList}
              noSkillList={this.state.noSkillList}
            />
          </div>
        </div>
      </div>
    );
  }
}
