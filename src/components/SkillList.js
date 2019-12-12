import React from "react";
import { Container, Row, Col, Form, } from 'react-bootstrap';
export default class SkillList extends React.Component {

    constructor(props) {

        super(props);
        this.boxChecked = this.boxChecked.bind(this);
        this.handleForm = this.handleForm.bind(this);

        this.state = {
            records: [],
            array: [],
            roles: [],
        }
    }
    //This pulls the data from the database and puts it into "records"
    getSkills = () => {
        var uri = (process.env.ADDRESS ? `http://${process.env.ADDRESS}` : `http://localhost:4500`) + `/API/SkillList/getAll`
        fetch(uri)
            .then(response => response.json())
            .then(SkillList_info => this.setState({ records: SkillList_info }))
    }

    componentDidMount = () => {
        this.getSkills();
        this.getRoleNames();
    }
    //calls the handleForm function on session window
    handleForm() {
        var newArray = this.state.array
        this.props.handleForm(newArray)
        this.props.handlePageChange("SkillLevels")
    };

    /**
     * Requests all the role information from the database to populate the drop down box
     */
    getRoleNames = () => {
        var uri = (process.env.ADDRESS ? `http://${process.env.ADDRESS}` : `http://localhost:2000`) + `/API/roles/get`
        fetch(uri)
            .then(response => response.json())
            .then(roles => this.populateDropdown(roles))

    }

    populateDropdown = (roles) => {
        let options = [];
        roles.map((role) => {
            options.push(<option>{role.role_name}</option>)
        })
        this.setState({
            roles: options
        })

    }

    getRoles = () => {
        var selectMenu = document.getElementById("dropdown");
        var selectVal = selectMenu.options[selectMenu.selectedIndex].text;
        if (selectVal === "---Select---") {
            if (this.state.array !== 0) {
                this.autofillRemove();
            }
            this.state.array = [];
        } else {
            this.autofillRemove();
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
    //This auto fills the skills after the role is selected
    autofill = () => {
        var array = this.state.array;
        for (var i = 0; i < array.length; i++) {
            var skill = array[i];
            var tick = document.getElementById(`${skill}`);
            tick.checked = true;
        }
    }
    //this removes the auto fiolled ticks when select is clicked
    autofillRemove = () => {
        var array = this.state.array;
        for (var i = 0; i < array.length; i++) {
            var skill = array[i];
            var tick = document.getElementById(`${skill}`);
            tick.checked = false;
        }
    }
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
    //maps the skills from the database and renders to the screen. CSS is still needed here
    render() {
        return (
            <div className="outter">
                <div className="inner">
                    <Col>
                        <h3>Skill List</h3>
                        <p>Please select an appropriate job role, or customise your own list.</p>
                        <center>
                            <select id="dropdown" onChange={() => this.getRoles()}>
                                <option>---Select---</option>
                                {this.state.roles}
                            </select>
                        </center><br />
                        <div>To alter or make your own custom list, select the checkboxes below:</div>
                    </Col>
                    <form >
                        {this.state.records.map((cat, index) => (
                            <div Key={index}><h1>Category: {cat.category_name}</h1>
                                <p></p>
                                <p></p>
                                <p></p>
                                {cat.subcategories.map((subcat, index) => (
                                    <div Key={index}><h3>Subcategory: {subcat.subcategory_name}</h3>
                                        <p></p>
                                        <p></p>
                                        <p></p>
                                        <div></div>
                                        {subcat.skills.map((skill, index) => (
                                            <span><div Key={index}> <input type="checkbox" id={(skill.skill_name)} onChange={() => this.boxChecked(skill.skill_name)} /> {skill.skill_name} </div>  </span>
                                        ))} </div>
                                ))}
                            </div>
                        ))}

                    </form>
                </div><br />
                <button type="submit" id="newArray" onClick={this.handleForm}>Submit</button>
            </div>
        )
    }
}
