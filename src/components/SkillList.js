import React from "react";
import { Container, Row, Col, Form, } from 'react-bootstrap';

export default class SkillList extends React.Component {

    constructor(props) {

        super(props);
        this.boxChecked = this.boxChecked.bind(this);
        this.handleForm = this.handleForm.bind(this);

        this.state = {
            records: [
                {
                    "_id": "5de7a188cdddf93459d4baae",
                    "category_name": "Strategy and Architecture",
                    "subcategories": [
                        {
                            "subcategory_name": "Information strategy",
                            "skills": [
                                {
                                    "skill_name": "Enterprise IT governance",
                                    "skill_descriptions": [
                                        {
                                            "level": 5,
                                            "skill_criteria": [
                                                {
                                                    "skill_criterion": "Reviews current and proposed information systems for compliance with the organisation's obligations (including legislation, regulatory, contractual and agreed standards/policies) and adherence to overall strategy."
                                                },
                                                {
                                                    "skill_criterion": "Provides specialist advice to those accountable for governance to correct compliance issues."
                                                }
                                            ]
                                        },
                                        {
                                            "level": 6,
                                            "skill_criteria": [
                                                {
                                                    "skill_criterion": "Within a defined area of accountability, determines the requirements for the appropriate governance of enterprise IT, ensuring clarity of responsibilities and authority, goals and objectives."
                                                },
                                                {
                                                    "skill_criterion": "Puts in place and maintains governance practices and resources to enable governance activity to be conducted with reasonable independence from management activity, in line with the organisation's corporate governance requirements."
                                                },
                                                {
                                                    "skill_criterion": "Undertakes and/or directs reviews as necessary to ensure management decision-making is transparent, and that an appropriate balance between benefits, opportunities, costs and risks can be demonstrated to principal stakeholders."
                                                },
                                                {
                                                    "skill_criterion": "Establishes and maintains the policies for compliance with the organisation's obligations (including legislation, regulatory, contractual and agreed standards/policies), holding the management team to account."
                                                },
                                                {
                                                    "skill_criterion": "Acts as the organisation's contact for relevant regulatory authorities. Ensures proper relationships between the organisation and external parties, with valid interest in the organisation's governance, are in place."
                                                }
                                            ]
                                        },
                                        {
                                            "level": 7,
                                            "skill_criteria": [
                                                {
                                                    "skill_criterion": "Leads the establishment and maintenance of a function that provides a consistent and integrated approach to IT governance in line with the organisation's corporate governance requirements."
                                                },
                                                {
                                                    "skill_criterion": "At the highest levels in the organisation's governance activities, provides assurance to principal stakeholders that IT services meet the organisation's obligations (including legislation, regulatory, contractual and agreed standards/policies)."
                                                },
                                                {
                                                    "skill_criterion": " Ensures that a framework of policies, standards, process and practices is in place to guide provision of enterprise IT services, and that suitable monitoring of the governance framework is in place to report on adherence to these obligations as needed."
                                                },
                                                {
                                                    "skill_criterion": " Establishes the appropriate guidance to enable transparent decision-making to be demonstrated, working with senior leaders to ensure the needs of principal stakeholders are understood, the value proposition offered by enterprise IT is accepted by these stakeholders and the evolving needs of the stakeholders and their appetite for balancing benefits, opportunities, costs and risks is embedded into strategic and operational plans."
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "_id": "5de7a188cdddf93459d4baae",
                    "category_name": "Dinosaur",
                    "subcategories": [
                        {
                            "subcategory_name": "Fish",
                            "skills": [
                                {
                                    "skill_name": "Eggs",
                                    "skill_descriptions": [
                                        {
                                            "level": 5,
                                            "skill_criteria": [
                                                {
                                                    "skill_criterion": "Reviews current and proposed information systems for compliance with the organisation's obligations (including legislation, regulatory, contractual and agreed standards/policies) and adherence to overall strategy."
                                                },
                                                {
                                                    "skill_criterion": "Provides specialist advice to those accountable for governance to correct compliance issues."
                                                }
                                            ]
                                        },
                                        {
                                            "level": 6,
                                            "skill_criteria": [
                                                {
                                                    "skill_criterion": "Within a defined area of accountability, determines the requirements for the appropriate governance of enterprise IT, ensuring clarity of responsibilities and authority, goals and objectives."
                                                },
                                                {
                                                    "skill_criterion": "Puts in place and maintains governance practices and resources to enable governance activity to be conducted with reasonable independence from management activity, in line with the organisation's corporate governance requirements."
                                                },
                                                {
                                                    "skill_criterion": "Undertakes and/or directs reviews as necessary to ensure management decision-making is transparent, and that an appropriate balance between benefits, opportunities, costs and risks can be demonstrated to principal stakeholders."
                                                },
                                                {
                                                    "skill_criterion": "Establishes and maintains the policies for compliance with the organisation's obligations (including legislation, regulatory, contractual and agreed standards/policies), holding the management team to account."
                                                },
                                                {
                                                    "skill_criterion": "Acts as the organisation's contact for relevant regulatory authorities. Ensures proper relationships between the organisation and external parties, with valid interest in the organisation's governance, are in place."
                                                }
                                            ]
                                        },
                                        {
                                            "level": 7,
                                            "skill_criteria": [
                                                {
                                                    "skill_criterion": "Leads the establishment and maintenance of a function that provides a consistent and integrated approach to IT governance in line with the organisation's corporate governance requirements."
                                                },
                                                {
                                                    "skill_criterion": "At the highest levels in the organisation's governance activities, provides assurance to principal stakeholders that IT services meet the organisation's obligations (including legislation, regulatory, contractual and agreed standards/policies)."
                                                },
                                                {
                                                    "skill_criterion": " Ensures that a framework of policies, standards, process and practices is in place to guide provision of enterprise IT services, and that suitable monitoring of the governance framework is in place to report on adherence to these obligations as needed."
                                                },
                                                {
                                                    "skill_criterion": " Establishes the appropriate guidance to enable transparent decision-making to be demonstrated, working with senior leaders to ensure the needs of principal stakeholders are understood, the value proposition offered by enterprise IT is accepted by these stakeholders and the evolving needs of the stakeholders and their appetite for balancing benefits, opportunities, costs and risks is embedded into strategic and operational plans."
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            array: []
        }
    }
    //calls the handleForm function on session window
    handleForm() {
        var newArray = this.state.array
        alert("hello")
        this.props.handleForm(newArray)
      };
    //creates and array and also deletes entries if needed
    boxChecked(input) {
        var a = document.getElementById(`${input}`);
        if (a.checked == true) {
            this.state.array.push(input);
        } else {
            while (this.state.array.indexOf(input) !== -1) {
                this.state.array.splice(this.state.array.indexOf(input), 1);
            }
        }
        console.log(this.state.array);
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

