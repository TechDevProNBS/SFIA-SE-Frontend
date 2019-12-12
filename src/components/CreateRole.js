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

    /**
     * Gets the skills and stores them in the state
     */
    getSkills = () => {
        var uri = (process.env.ADDRESS ? `http://${process.env.ADDRESS}` : `http://localhost:4500`) + `/API/SkillList/getAll`
        fetch(uri)
            .then(response => response.json())
            .then(SkillList_info => this.setState({ records: SkillList_info }))
    }

    componentDidMount = () => {
        this.getSkills();
    }

    /**
     * calls the handleForm function on session window
     */
    handleForm() {
        var newArray = this.state.array
        this.props.handleForm(newArray)
    };

    /**
     * Finds the role selected and fetches data from the database to autofill the boxes
     */
    getRoles = () => {
        var selectMenu = document.getElementById("dropdown");
        var selectVal = selectMenu.options[selectMenu.selectedIndex].text;
        if (selectVal === "---Select---") {
            if (this.state.array !== 0) {
                this.autofillRemove();
            }
            this.state.array = [];
        } else {
            var tempArray = [];
            var uri = (process.env.ADDRESS ? `http://${process.env.ADDRESS}` : `http://localhost:2000`) + `/API/roles/getRoleByName/${selectVal}`
            fetch(uri)
                .then(response => response.json())
                .then(vals =>
                    tempArray = vals[0].skills.map(function (data) {
                        tempArray.push(data.skill_name)
                    })
                )
                .then(this.state.array = tempArray)
                .then(this.autofill)

        }
    }

    /**
     * Autofills the boxes based on if they are in the array that gets passed to the next page
     */
    autofill = () => {
        var array = this.state.array;
        for (var i = 0; i < array.length; i++) {
            var skill = array[i];
            var tick = document.getElementById(`${skill}`);
            tick.checked = true;
        }
    }

    /**
     * When the default option is pressed, it resets all the checks for the boxes
     */
    autofillRemove = () => {
        var array = this.state.array;
        for (var i = 0; i < array.length; i++) {
            var skill = array[i];
            var tick = document.getElementById(`${skill}`);
            tick.checked = false;
        }
    }
    /**
    * 
    * Checks if box is checked and adds skill to the array
    * 
    * @param  input. Name of the skill being added
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
        console.log(this.state.array)
    }
    /**
     * Maps the skills from the database and renders to the screen. CSS is still needed here
     */
    render() {
        return <div>
            <Col>
                <h3>Skill List</h3>
                <p>Please select an appropriate job role, or customise your own list.</p>
                <center>
                    <select id="dropdown" onChange={() => this.getRoles()}>
                        <option>---Select---</option>
                        <option>Analyst</option>
                    </select>
                    <br />
                    Please enter a job role to create
                    <br />
                    <input type="text" style={{ textAlign: "center" }} />
                </center><br />
                <div>To alter or make your own custom list, select the checkboxes below:</div>
            </Col>
            <form >
                {this.state.records.map((cat, index) => (
                    <div Key={index}>Category: {cat.category_name}
                        {cat.subcategories.map((subcat, index) => (
                            <div Key={index}>Subcategory: {subcat.subcategory_name}
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
