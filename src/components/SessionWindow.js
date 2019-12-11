import React from "react";
import Responsibilities from "./Responsibilities";
import SkillList from "./SkillList";
import SkillLevel from "./SkillLevel";
import ReviewPage from "./ReviewPage";

import "./css/SessionWindow.css";

/**
 * Calls all pages used during a session and determines
 * which to display based on this.props.Carousel_Page
 * inputed from Session.js
 */
export default class SessionWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remindInDate: 0,
      customGoals: [],
      newSkillList: [],
      old_Carousel_Page: 0,
      yResp: [],
      nResp: [],
      yesSkillList: [],
      noSkillList: [],
      lvl: "",
      slLvl: "",
      selectedSkill: []
    };

  }

  /**
   * Enters the new array from skill list page into this.state
   */
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

  /**
   * Deletes a Custom Goal, called from ReviewPage.js
   */
  deleteCustomGoal = input => {
    var newCustomGoals = this.state.customGoals;
    newCustomGoals.splice(input, 1);
    this.setState({
      customGoals: newCustomGoals
    });
  };

  /**
   * Adds a Custom Goal to be used in ReviewPage.js. Called from ReviewPage.js
   */
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

  /**
   * Updates remindInDate to the value of the slider
   */ 
  updateRemindInDate = event => {
    this.setState({
      remindInDate: event
    });
  };

  /**
   * Animation in an easeInOut style for the carousel
   * It is triggered when 'this.props.Carousel_Page' has changed.
   * Using an approximation of the error function, the distantance
   * traveled each frame is calculated and implemented between any two pages
   */
  CarouselAnimation = () => {
    var new_Carousel_Page = this.props.Carousel_Page;
    var old_Carousel_Page = this.state.old_Carousel_Page;

    this.setState({
      old_Carousel_Page: this.props.Carousel_Page
    });

    /**
     * The difference in position from the starting position to
     * ending position.
     */
    var difference = old_Carousel_Page * 100 - new_Carousel_Page * 100;

    /**
     * The element from which the position will be altered
     */
    var elem = document.getElementsByClassName("Carousel")[0];

    /**
     * The current frame the animation is on
     */
    var step = 0;

    /**
     * The current position in the animation
     */
    var pos = old_Carousel_Page * 100;

    /**
     * The number of frames of animation in a move
     */
    var noOfSteps = 100;

    /**
     * The difference in time between each frame
     */
    var frameRate = 10;

    /**
     * An array of differences in positions for each frame
     */
    var percentProgress = [];

    erf();

    var id = setInterval(move, frameRate);

    /**
     * An approximation of the error function
     * Produces a list of differences of movement required to reach
     * it's final distination from it's current position.
     */
    function erf() {
      var progression = difference / 2;

      var spacing = 4.5 / noOfSteps;
      var firstHalf = [];
      var secondHalf = [];
      var progressBar = [];
      var a_1 = 0.278393;
      var a_2 = 0.230389;
      var a_3 = 0.000972;
      var a_4 = 0.078108;
      for (var i = 0; i < noOfSteps / 2; i++) {
        var x = i * spacing;
        var newPercent =
          (1 -
            1 /
              (1 + a_1 * x + a_2 * x ** 2 + a_3 * x ** 3 + a_4 * x ** 4) ** 4) *
          progression;
        firstHalf.push(50 - newPercent);
        secondHalf.push(newPercent + 50);
      }
      progressBar = firstHalf.reverse().concat(secondHalf);
      for (var i = 0; i < progressBar.length; i++) {
        percentProgress.push(progressBar[i + 1] - progressBar[i]);
      }
    }

    /**
     * Function used to carry out a frame of the animation
     */
    function move() {
      if (step == noOfSteps - 2) {
        clearInterval(id);
        step = 0;
        elem.style.right = new_Carousel_Page * 100 + "%";
      } else {
        step++;
        pos -= percentProgress[step];
        elem.style.right = pos + "%";
      }
    }
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
    /**
     * If a different page is selected, trigger the CarouselAnimation to move
     * to the new page. The CarouselAnimation will edit this.state.old_Carousel_Page
     * accordingly
     */
    if (this.props.Carousel_Page !== this.state.old_Carousel_Page) {
      this.CarouselAnimation();
    }
    return (
      <div className="SessionWindow">
        <div className="Carousel">
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