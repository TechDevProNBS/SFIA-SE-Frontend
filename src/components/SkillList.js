import React from "react";
import { Container, Row, Col, Form, } from 'react-bootstrap';

export default class SkillList extends React.Component {

  constructor(props) {

    super(props);
    this.boxChecked = this.boxChecked.bind(this);
    this.handleForm = this.handleForm.bind(this);

    this.state = {
      records: [],
      array: []
    }
  }
  getSkills = () => {
    fetch(`http://localhost:4500/API/showSkillList`)
      .then(response => response.json())
      .then(SkillList_info => this.setState({ records: SkillList_info }))
  }

  componentDidMount = () => {
    this.getSkills();
  }
  //calls the handleForm function on session window
  handleForm() {
    var newArray = this.state.array
    this.props.handleForm(newArray)
    this.props.handlePageChange("SkillLevels")
  };
  //creates an array and also deletes entries if needed

  /**
  * 
  * Example message
  * 
  * @param  input.
  * 
  */
  boxChecked(input) {
    var a = document.getElementById(`${input}`);
    if (a.checked == true) {
      this.state.array.push(input);
    } else {
      while (this.state.array.indexOf(input) !== -1) {
        this.state.array.splice(this.state.array.indexOf(input), 1);
      }
    }
  }
  //maps the skills from the database and renders to the screen. CCS is still needed here
  render() {
    return <div>
      <Col>
        <h3>Skill List</h3>
        <p>Please select an appropriate job role, or customise your own list.</p>
        <center>
          <select>
            <option>---Select---</option>
            <option>Analyst</option>
          </select>
        </center><br />
        <div>To alter or make your own custom list, select the checkboxes below:</div>
      </Col>
      <form >
        {this.state.records.map((cat, index) => (
          <div Key={index}>Catergory: {cat.category_name}
            {cat.subcategories.map((subcat, index) => (
              <div Key={index}>Subatergory: {subcat.subcategory_name}
                {subcat.skills.map((skill, index) => (
                  <span><div Key={index}> <input type="checkbox" id={(skill.skill_name)} onChange={() => this.boxChecked(skill.skill_name)} /> {skill.skill_name} </div>  </span>
                ))} </div>
            ))}
          </div>
        ))}

      </form>
      <button type="submit" id="newArray" onClick={this.handleForm}>Submit</button>
    </div>;
  }
}

