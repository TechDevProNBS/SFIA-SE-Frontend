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
      lblNo: "No",
      disable: true,
      skillYesArr: [],
      skillNoArr: []
    }
  }

  /**
 * Calculates the percentage of true and false select boxes for each column 
 * Then calls the enable function if greater than 2/3
 * Calls disable function if less
 */
  selectCount = (index) => {
    var tab = document.getElementById("list1");
    var row = tab.rows.length;
    var tr, td;
    var count = 0;
    var per = 0;
    var total = 0;
    for (var i = 0; i < row; i++) {
      tr = tab.rows[i];
      td = tr.cells[index];
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
    switch (index) {
      case 0:
        this.addArr(index);
        break;
      case 1:
        this.addArr(index);
        break;
      case 2:
        this.addArr(index);
        break;
      case 3:
        this.addArr(index);
        break;
      case 4:
        this.addArr(index);
        break;
      case 5:
        this.addArr(index);
        break;
      case 6:
        this.addArr(index);
        break;
    }
  }

  /**
   * Gets the select boxes for the column from the input param
   * Enables all boxes in the column
   */
  enableSelect = (input) => {
    var select = document.getElementsByName(input);
    var arr = Array.from(select);
    for (var i = 0; i < arr.length; i++) {
      arr[i].firstElementChild.disabled = false;
    }
  }

  /**
  * Gets the select boxes for the column from the input param
  * Disables all boxes in the column and sets to default value
  */
  disableSelect = (input) => {
    var span = document.getElementsByName(input);
    var arr = Array.from(span);
    for (var i = 0; i < arr.length; i++) {
      var select = [arr[i].firstElementChild];
      for (var opt, j = 0; opt = select[j]; j++) {
        opt.selectedIndex = 0;
        select[j].disabled = true;
      }
    }
  }

 
  addArr = (lvl) => {
    var prev = lvl-1
    var carousel = Array.from(document.getElementsByClassName("Carousel_Item"))
    var curLvl = Array.from(carousel[2].querySelectorAll("[name="+"'"+lvl+"'"+"]"))
    var prevLvl = Array.from(carousel[2].querySelectorAll("[name="+"'"+prev+"'"+"]"))
    var yArr = [];
    var nArr = [];
    console.log(lvl);
    if (lvl == 1) {
      for (var i = 0; i < curLvl.length; i++) {
        if (curLvl[i].firstElementChild.value === "true") {
          yArr.push(curLvl[i].lastElementChild.innerHTML);
        } else if (curLvl[i].firstElementChild.value === "false") {
          nArr.push(curLvl[i].lastElementChild.innerHTML);
        }
      }
    } else {
      for (var i = 0; i < curLvl.length; i++) {
        if (curLvl[i].firstElementChild.value === "true") {
          yArr.push(curLvl[i].lastElementChild.innerHTML);
        }
      }
      for (var i = 0; i < prevLvl.length; i++) {
        if (prevLvl[i].firstElementChild.value === "false") {
          nArr.push(prevLvl[i].lastElementChild.innerHTML);
        }
      }
    }
    this.state.SkillYesArr = yArr;
    this.state.SkillNoArr = nArr;
  }

  sendSkillList = () => {
    var yesArray = this.state.SkillYesArr;
    var noArray = this.state.SkillNoArr;
    console.log(yesArray)
    console.log(noArray)
    this.props.pushYesSL(yesArray);
    this.props.pushNoSL(noArray);
  }

  handleOnClick = () => {
    this.sendSkillList();
    this.nextPage();
  }

  nextPage = () => {
    this.props.handlePageChange("SkillReviewPage")
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
            <tbody id="list1">
              {this.props.selectedSkill.map((name, index) => (
                <tr>
                  <td><b>{name.skill_name}</b></td>
                  {[...Array(name.skill_descriptions[0].level - 1)].map((e, i) => (
                    <td></td>
                  ))}
                  {name.skill_descriptions.map((desc, index) => (
                    <td className="slData">
                      {desc.skill_criteria.map((desc2, index2) => (
                        <span name={desc.level} className={desc.level}>
                          <select id={index2} disabled={this.state.disable} onChange={() => this.selectCount(desc.level)}>
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
            </tbody>
          </table>
        </div> <br />
        <button name="skillList" onClick={() => this.handleOnClick()}>Review</button>
      </Container>
    );
  }
}