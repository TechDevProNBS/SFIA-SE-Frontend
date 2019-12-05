import React from 'react';
import { Container } from 'react-bootstrap';
import './css/Responsibilities.css'

export default class SkillLevel extends React.Component {
  constructor() {
    super();
    this.state = {
      skillLvl: [],
      
      lblDefault: "Select",
      lblYes: "Yes",
      lblNo: "No",
      disable: true
    }
  }
  getResp = () => {
    fetch(`http://localhost:8084/API/showResponsibilities`)
      .then(response => response.json())
      .then(responsibility_info => this.setState({ resp: responsibility_info }))
  }

  componentDidUpdate = () => {
    var select = document.getElementsByName("0");
    for (var i = 0; i < select.length; i++) {
      console.log(select[i]);
      select[i].disabled = false;
    }
  }

  enableSelect = (input) => {
    var select = document.getElementsByName(input);
    for (var i = 0; i < select.length; i++) {
      console.log(select[i] + " enable");
      select[i].disabled = false;
    }
  }

  disableSelect = (input) => {
    var select = document.getElementsByName(input);
    for (var i = 0; i < select.length; i++) {
      console.log(select[i] + " disable");
      select[i].disabled = true;
    }
  }

  selectCount = (index) => {
    var tab = document.getElementById("list");
    var select = document.getElementById(index);
    console.log(select);
    var row = tab.rows.length;
    var tr, td;
    var count = 0;
    var per = 0;
    var total = 0;
    var ttlPer = 0;
    for (var i = 0; i < row; i++) {
      tr = tab.rows[i];
      td = tr.cells[index + 1];
      var a = td.getElementsByTagName("span");
      for (var j = 0; j < a.length; j++) {
        if (a[j].firstElementChild.value == "true") {
          count++;
        }
        total++;
      }
    }

    per = ((count / total) * 100).toFixed(2);
    console.log(per + "%");
    if (per > ((2 / 3) * 100)) {
      switch (index) {
        case 0:
          this.enableSelect(1);
          break;
        case 1:
          this.enableSelect(2);
          break;
        case 2:
          this.enableSelect(3);
          break;
        case 3:
          this.enableSelect(4);
          break;
        case 4:
          this.enableSelect(5);
          break;
        case 5:
          this.enableSelect(6);
          break;
      }
    } else {
      switch (index) {
        case 0:
          this.disableSelect(1);
          this.disableSelect(2);
          this.disableSelect(3);
          this.disableSelect(4);
          this.disableSelect(5);
          this.disableSelect(6);
          break;
        case 1:
          this.disableSelect(2);
          this.disableSelect(3);
          this.disableSelect(4);
          this.disableSelect(5);
          this.disableSelect(6);
          break;
        case 2:
          this.disableSelect(3);
          this.disableSelect(4);
          this.disableSelect(5);
          this.disableSelect(6);
          break;
        case 3:
          this.disableSelect(4);
          this.disableSelect(5);
          this.disableSelect(6);
          break;
        case 4:
          this.disableSelect(5);
          this.disableSelect(6);
          break;
        case 5:
          this.disableSelect(6);
          break;
      }
    }
  }

  render() {
    return (
      <Container>
        <div className="lvls">
          <table id="table" class="table table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Level 1</th>
                <th>Level 2</th>
                <th>Level 3</th>
                <th>Level 4</th>
                <th>Level 5</th>
                <th>Level 6</th>
                <th>Level 7</th>
              </tr>
            </thead>
            <tbody id="list">
              {this.state.skillLvl.map((name, index) => (
                <tr>
                  <td><b>{name.responsibility_name}</b></td>
                  {name.responsibility_descriptions.map((desc, index) => (
                    <td>
                      {desc.responsibility_criteria.map((desc2, index2) => (
                        <span style={{ visibility: this.state.visible }}>
                          <select id={index2} name={index} disabled={this.state.disable} onChange={() => this.selectCount(index)}>
                            <option name="checked" value="select">{this.state.lblDefault}</option>
                            <option value="true">{this.state.lblYes}</option>
                            <option value="false">{this.state.lblNo}</option>
                          </select>
                          <p>{desc2.responsibility_criterion}</p><br />
                        </span>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    );
  }
}