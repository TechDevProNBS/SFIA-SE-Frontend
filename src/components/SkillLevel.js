import React from 'react';
import { Container } from 'react-bootstrap';
import './css/Responsibilities.css'
import { array } from 'prop-types';
import SkillList from './SkillList';

export default class SkillLevel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lvl: "",
      lblDefault: "Select",
      lblYes: "Yes",
      lblNo: "No"
    }
  }

  render() {
    return (
      <div className="lvls">
        <table id="table" class="table table-hover">
          {this.props.selectedSkill.map((name, index) => (
          <thead>

              {name.skill_descriptions.map((desc, index) => (
                <th>{desc.level}</th>
              ))}
          </thead>

          ))}
          {/* <tbody id="list">
            {this.props.selectedSkill.map((name, index) => (
              <tr id="">
                <td><b>{name.skill_name}</b></td>
                {name.skill_descriptions.map((desc, index) => (
                  <td>
                    {desc.skill_criteria.map((desc2, index2) => (
                      <span name={index}>
                        <select id={index2} disabled={this.state.disable} onChange={() => this.selectCount(index)}>
                          <option selected>{this.state.lblDefault}</option>
                          <option value="true">{this.state.lblYes}</option>
                          <option value="false">{this.state.lblNo}</option>
                        </select>
                        <p id="info">{desc2.skill_criterion}</p>
                      </span>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>

    );
  }
}