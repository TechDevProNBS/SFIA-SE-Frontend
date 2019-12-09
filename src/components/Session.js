import React from "react";
import NavBar from "./NavBar";
import SessionWindow from "./SessionWindow";

<<<<<<< HEAD
=======
import "./css/Session.css"
>>>>>>> developer

/*
  The Parent file from which all files required to make a review are called.
  Communication between NavBar.js and SessionWindow.js occurs here
*/
export default class Session extends React.Component {
  state = {
    Carousel_Page: 0
  };

  // HandlePageChange is called when a button in pressed in NavBar.js.
  // Event is the output returned by NavBar
  handlePageChange = event => {
    // Assignes the word "Responsibilities" to the first page inside SessionWindow.js
    if (event == "Responsibilities") {
      this.setState({
        Carousel_Page: 0
      });
    }

    // Assignes the word "SkillList" to the first page inside SessionWindow.js
    else if (event == "SkillList") {
      this.setState({
        Carousel_Page: 1
      });
    }

    // Assignes the word "SkillLevels" to the first page inside SessionWindow.js
    else if (event == "SkillLevels") {
      this.setState({
        Carousel_Page: 2
      });
    }

    // Assignes the word "SkillReviewPage" to the first page inside SessionWindow.js
    else if (event == "SkillReviewPage") {
      this.setState({
        Carousel_Page: 3
      });
    }

    return event;
  };


  render() {
    return (
      <div>
        <div className="Session-Header">
          SFIA Development
        </div>
        {/* HandlePageChange is the Output from NavBar */}
        <NavBar handlePageChange={this.handlePageChange} Carousel_Page={this.state.Carousel_Page}/>
        {/* Carousel_Page is the page that should appear in the session */}
        <SessionWindow 
        Carousel_Page={this.state.Carousel_Page} 
        handlePageChange={this.handlePageChange} />
       
        {/* skillLeve is the page that should appear in the session */}
      </div>
    );
  }
}
