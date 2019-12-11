import React from "react";

import "./css/NavBar.css";

/**
  *  Lists the Pages in a session
  *  When a button is clicked the name of the page is sent to props (in Session.js)
*/
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      old_Carousel_Page: 0,
      progressBarWidth: "0%"
    }
  }

  /**
   * When the Responsibilities button is clicked send "Responsibilities" to props (in Session.js)"
   *  */ 
  toResponsibilities = event => {
    this.props.handlePageChange("Responsibilities");
  };

  /**
   * When the SkillList button is clicked send "SkillList to props (in Session.js)"
   */
  toSkillList = event => {
    this.props.handlePageChange("SkillList");
  };

  /**
   * When the SkillLevels button is clicked send "SkillLevels" to props (in Session.js)"
   */
  toSkillLevels = event => {
    this.props.handlePageChange("SkillLevels");
  };
  
  /**
   * When the SkillReviewPage button is clicked send "SkillReviewPage" to props (in Session.js)"
   */
  toSkillReviewPage = event => {
    this.props.handlePageChange("SkillReviewPage");
  };

  /**
   * Animation in an easeInOut style for the progress of the NavBar
   * It is triggered when 'this.props.Carousel_Page' has changed.
   * Using an approximation of the error function, the distantance
   * traveled each frame is calculated and implemented between any two pages
   */
  progressBarAnimation = () => {
    var new_Carousel_Page = this.props.Carousel_Page
    var old_Carousel_Page = this.state.old_Carousel_Page

    this.setState({
      old_Carousel_Page: this.props.Carousel_Page
    })
    /**
     * The difference in position from the starting position to
     * ending position.
     */
    var difference = (old_Carousel_Page / 3) * 100 - (new_Carousel_Page / 3) * 100

    /**
     * The element from which the position will be altered
     */
    var elem = document.getElementsByClassName(
      "Progress-Bar-Completed"
    )[0];

    /**
     * The current frame the animation is on
     */
    var step = 0;

    /**
     * The current position in the animation
     */
    var pos = (old_Carousel_Page / 3) * 100;

    /**
     * The number of frames of animation in a move
     */
    var noOfSteps = 100
    
    /**
     * The difference in time between each frame
     */
    var frameRate = 10;

    /**
     * An array of differences in positions for each frame
     */
    var percentProgress = [];

    erf()

    var id = setInterval(move, frameRate);

    /**
     * An approximation of the error function
     * Produces a list of differences of movement required to reach
     * it's final distination from it's current position.
     */
    function erf() {
      var progression = difference/2

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
        elem.style.width = (new_Carousel_Page / 3) * 100 + "%"
      } else {
        step++;
        pos -= percentProgress[step];
        elem.style.width = pos + "%";
      }
    }

  }


  render() {
    /**
     * If a different page is selected, trigger the progressBarAnimation to move
     * the progress bar. The progressBarAnimation will edit this.state.old_Carousel_Page
     * accordingly
     */
    if (this.props.Carousel_Page !== this.state.old_Carousel_Page) {
      this.progressBarAnimation()
    }


    var activeButton = "btn btnNav btn-outline-primary active";
    var nonActiveButton = "btn btnNav btn-outline-primary";

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
