import React from 'react';
import { Container } from 'react-bootstrap';
import './css/Responsibilities.css'

export default class Responsibilities extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: [],
      lblDefault: "Select",
      lblYes: "Yes",
      lblNo: "No",
      visible: "visible",
      disable: true,
      respYesArr: [],
      respNoArr: [],
      id: ""
    }
  }

  getResp = () => {
    fetch(`http://localhost:8084/API/showResponsibilities`)
      .then(response => response.json())
      .then(responsibility_info => this.setState({ resp: responsibility_info }))
  }

  componentDidMount = () => {
    this.getResp();
  }

  componentDidUpdate = () => {
    var select = document.getElementsByName("0");
    for (var i = 0; i < select.length; i++) {
      select[i].disabled = false;
    }
  }

  enableSelect = (input) => {
    var select = document.getElementsByName(input);
    for (var i = 0; i < select.length; i++) {
      select[i].disabled = false;
    }
  }

  disableSelect = (input) => {
    var select = document.getElementsByName(input);
    var arr = Array.from(select);
    for (var i = 0; i < arr.length; i++) {
      for (var opt, j = 0; opt = arr[j]; j++) {
        opt.selectedIndex = 0;
        select[i].disabled = true;
      }
    }
  }

  selectClick = (index) => {
    this.selectCount(index);
  }

  addArr = () => {
    console.log(this.state.id);
    var span = document.getElementsByTagName("span");
    var select = document.getElementsByName("0");
    console.log(select);
    console.log(select.getAttribute('name'));
    var yArr = this.state.respYesArr;
    var nArr = this.state.respNoArr;
    yArr = [];
    nArr = [];

    for (var i = 0; i < span.length; i++) {
      if (span.item(i).firstElementChild !== null) {
        if (span.item(i).firstElementChild.value === "true") {
          yArr.push(span.item(i).lastElementChild.innerHTML);
        }
        else if (span.item(i).firstElementChild.value === "false") {
          nArr.push(span.item(i).lastElementChild.innerHTML);
        }
      }
    }
    console.log(yArr);
    console.log(nArr);


    this.pushResp();

  }

  selectCount = (index) => {
    var tab = document.getElementById("list");
    var row = tab.rows.length;
    var tr, td;
    var count = 0;
    var per = 0;
    var total = 0;
    for (var i = 0; i < row; i++) {
      tr = tab.rows[i];
      td = tr.cells[index + 1];
      if (td !== undefined) {
        var a = td.getElementsByTagName("span");
        var b = td.getElementsByTagName("p");
        for (var j = 0; j < a.length; j++) {
          if (a[j].firstElementChild.value === "true") {
            count++;
          }
          total++;
        }
      }
    }
    per = ((count / total) * 100).toFixed(2);
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
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(1);
            this.disableSelect(2);
            this.disableSelect(3);
            this.disableSelect(4);
            this.disableSelect(5);
            this.disableSelect(6);
          }
          break;
        case 1:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(2);
            this.disableSelect(3);
            this.disableSelect(4);
            this.disableSelect(5);
            this.disableSelect(6);
          }
          break;
        case 2:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(3);
            this.disableSelect(4);
            this.disableSelect(5);
            this.disableSelect(6);
          }
          break;
        case 3:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(4);
            this.disableSelect(5);
            this.disableSelect(6);
          }
          break;
        case 4:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(5);
            this.disableSelect(6);
          }
          break;
        case 5:
          if (per < ((2 / 3) * 100)) {
            this.disableSelect(6);
          }
          break;
      }
    }
  }

  pushResp = () => {
    var newYArray = this.state.respYesArr;
    var newNArray = this.state.respNoArr;
    this.props.pushResp(newYArray);
    this.props.pushResp(newNArray);
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
              {this.state.resp.map((name, index) => (
                <tr>
                  <td><b>{name.responsibility_name}</b></td>
                  {name.responsibility_descriptions.map((desc, index) => (
                    <td>
                      {desc.responsibility_criteria.map((desc2, index2) => (
                        <span style={{ visibility: this.state.visible }}>
                          <select id={index2} name={index} disabled={this.state.disable} onChange={() => this.selectClick(index)}>
                            <option selected>{this.state.lblDefault}</option>
                            <option value="true">{this.state.lblYes}</option>
                            <option value="false">{this.state.lblNo}</option>
                          </select>
                          <p id="info">{desc2.responsibility_criterion}</p>
                        </span>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div><br />
        <button name="skillList" onClick={() => this.addArr()}>Skill List Selection</button>
      </Container>
    );
  }
}