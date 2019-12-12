import React from 'react';
import { Container } from 'react-bootstrap';
import './css/SkillLevel.css'
import { thisExpression } from '@babel/types';

export default class SkillLevel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lvl1: "",
      lblDefault: "Select",
      lblYes: "Yes",
      lblNo: "No",
      disable: true,
      skillYesArr: [],
      skillNoArr: []
    }
  }

  /**
   * Calls the skillLevelStart function
   */
  componentDidUpdate = () => {
    this.skillLevelStart()
  }

  /**
   * Enables select boxes in column depending on level from responsibilities page
   * Enables lowest level if passed level is too low
   */
  skillLevelStart = () => {
    var carousel = Array.from(document.getElementsByClassName("Carousel_Item"))
    var startLvl = Array.from(carousel)
    var select = startLvl[2].getElementsByClassName("slData")
    var lvlArr = []
    var min = 1;
    var check;
    for (var i = 0; i < select.length; i++) {
      var name = select[i].firstElementChild.getAttribute("name")
      if (parseInt(name) == parseInt(this.props.level)) {
        var span = select[i].getElementsByTagName("span")
        for (var j = 0; j < span.length; j++) {
          span[j].firstElementChild.disabled = false;
          check = true;
        }
      }
      else {
        lvlArr.push(name)
        min = lvlArr.sort((a, b) => a - b)[0];
      }
    }
    if (check !== true) {
      for (var i = 0; i < select.length; i++) {
        var name = select[i].firstElementChild.getAttribute("name")
        if (parseInt(name) == parseInt(min)) {
          var span = select[i].getElementsByTagName("span")
          for (var j = 0; j < span.length; j++) {
            span[j].firstElementChild.disabled = false;
          }
        }
      }
    }
  }

  /**
  * Calculates the percentage of true and false select boxes for each column 
  * Then calls the enable function if greater than 2/3
  * Calls disable function if less
  * Calls add array function passing current level
  */
  selectCount = (index) => {
    var carousel = Array.from(document.getElementsByClassName("Carousel_Item"))
    var select = Array.from(carousel[2].querySelectorAll("[name=" + "'" + index + "'" + "]"))
    var count = 0, per = 0, total = 0;

    for (var i = 0; i < select.length; i++) {
      if (select[i].firstElementChild.value === "true") {
        count++;
      }
      total++;
    }
    var noOfSelect = 0;
    for (var j = 0; j < select.length; j++) {
      if (select[j].firstElementChild.value !== "true" && select[j].firstElementChild.value !== "false") {
        noOfSelect++;
      }
    }
    var count2 = 0, per2 = 0, total2 = 0;
    for (var k = 0; k < select.length; k++) {
      if (select[k].firstElementChild.value === "false") {
        count2++;
      }
      total2++;
    }
    per = ((count / total) * 100).toFixed(2);
    per2 = ((count2 / total2) * 100).toFixed(2);
    if (noOfSelect === 0) {
      if (per > ((2 / 3) * 100)) {
        switch (index) {
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
          case 6:
            this.enableSelect(7);
            break;
        }
      } else {
        switch (index) {
          case 1:
            if (per < ((2 / 3) * 100)) {
              this.disableSelect(2);
              this.disableSelect(3);
              this.disableSelect(4);
              this.disableSelect(5);
              this.disableSelect(6);
              this.disableSelect(7);
            }
            break;
          case 2:
            if (per < ((2 / 3) * 100)) {
              this.disableSelect(3);
              this.disableSelect(4);
              this.disableSelect(5);
              this.disableSelect(6);
              this.disableSelect(7);
            }
            break;
          case 3:
            if (per < ((2 / 3) * 100)) {
              this.disableSelect(4);
              this.disableSelect(5);
              this.disableSelect(6);
              this.disableSelect(7);
            }
            break;
          case 4:
            if (per < ((2 / 3) * 100)) {
              this.disableSelect(5);
              this.disableSelect(6);
              this.disableSelect(7);
            }
            break;
          case 5:
            if (per < ((2 / 3) * 100)) {
              this.disableSelect(6);
              this.disableSelect(7);
            }
            break;
          case 6:
            if (per < ((2 / 3) * 100)) {
              this.disableSelect(7);
            }
            break;
        }
      }
      if (per2 > ((2 / 3) * 100)) {
        switch (index) {
          case 2:
            this.enableSelect(1);
            break;
          case 3:
            this.enableSelect(2);
            break;
          case 4:
            this.enableSelect(3);
            break;
          case 5:
            this.enableSelect(4);
            break;
          case 6:
            this.enableSelect(5);
            break;
          case 7:
            this.enableSelect(6);
            break;
        }
      }
    }
    switch (index) {
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
      case 7:
        this.addArr(index);
        break;
    }
    this.levelFunc(index);
  }

  /**
   * Gets level of column with true values over 2/3
   */
  levelFunc = (index) => {
    var carousel = Array.from(document.getElementsByClassName("Carousel_Item"))
    var select = Array.from(carousel[2].querySelectorAll("[name=" + "'" + index + "'" + "]"))
    var count = 0, per = 0, total = 0;

    for (var i = 0; i < select.length; i++) {
      if (select[i].firstElementChild.value === "true") {
        count++;
      }
      total++;
    }
    per = ((count / total) * 100).toFixed(2);
    if (per > ((2 / 3) * 100)) {
      this.state.lvl1 = index;
    } else {
      this.state.lvl1 = index - 1;
    }
  }

  /**
   * Gets the select boxes for the column from the input param
   * Enables all boxes in the column
   */
  enableSelect = (input) => {
    var carousel = Array.from(document.getElementsByClassName("Carousel_Item"))
    var span = Array.from(carousel[2].querySelectorAll("[name=" + "'" + input + "'" + "]"))
    var arr = Array.from(span);
    for (var i = 0; i < arr.length; i++) {
      arr[i].firstElementChild.disabled = false;
    }
  }

  /**
  * Gets the select boxes for the column from the input param
  * Disables all boxes in the column and sets to default value
  */
  disableSelect = (input) => {
    var carousel = Array.from(document.getElementsByClassName("Carousel_Item"))
    var span = Array.from(carousel[2].querySelectorAll("[name=" + "'" + input + "'" + "]"))
    var arr = Array.from(span);
    for (var i = 0; i < arr.length; i++) {
      var select = [arr[i].firstElementChild];
      for (var opt, j = 0; opt = select[j]; j++) {
        opt.selectedIndex = 0;
        select[j].disabled = true;
      }
    }
  }

  /**
   * Creates arrays for all select boxes with true value for current level
   * Creates arrays for all select boxes with false value for previous level
   * Assigns arrays and current level to state
   */
  addArr = (lvl) => {
    var prev = lvl - 1;
    var next = lvl + 1;
    var carousel = Array.from(document.getElementsByClassName("Carousel_Item"))
    var curLvl = Array.from(carousel[2].querySelectorAll("[name=" + "'" + lvl + "'" + "]"))
    var nextLvl = Array.from(carousel[2].querySelectorAll("[name=" + "'" + next + "'" + "]"))
    var prevLvl = Array.from(carousel[2].querySelectorAll("[name=" + "'" + prev + "'" + "]"))
    var ySlArr = [];
    var nSlArr = [];
    var temp = 0;

    if (nextLvl[0] === undefined) {
      var counter = 0;
      var tot = 0;
      var per = 0;
      for (var i = 0; i < curLvl.length; i++) {
        if (curLvl[i].firstElementChild.value === "true") {
          counter++;
        }
        tot++;
      }
      per = counter / tot * 100;
      if (per > (2 / 3) * 100) {
        for (var i = 0; i < curLvl.length; i++) {
          if (curLvl[i].firstElementChild.value === "true") {
            ySlArr.push(curLvl[i].lastElementChild.innerHTML);
          }
          else if (curLvl[i].firstElementChild.value === "false") {
            nSlArr.push(curLvl[i].lastElementChild.innerHTML);
          }
        }
      } else if (per <= (2 / 3) * 100) {
        for (var j = 0; j < curLvl.length; j++) {
          if (curLvl[j].firstElementChild.value === "true") {
            ySlArr.push(curLvl[j].lastElementChild.innerHTML);
          }
        }
        for (var k = 0; k < prevLvl.length; k++) {
          if (prevLvl[k].firstElementChild.value === "false") {
            nSlArr.push(prevLvl[k].lastElementChild.innerHTML);
          }
        }
      }
    }
    if (prevLvl.length === 0) {
      var counter = 0;
      var tot = 0;
      var per = 0;
      for (var i = 0; i < curLvl.length; i++) {
        if (curLvl[i].firstElementChild.value === "true") {
          counter++;
        }
        tot++;
      }
      per = counter / tot * 100;
      if (per < (2 / 3) * 100) {
        for (var i = 0; i < curLvl.length; i++) {
          if (curLvl[i].firstElementChild.value === "true") {
            ySlArr.push(curLvl[i].lastElementChild.innerHTML);
          }
          else if (curLvl[i].firstElementChild.value === "false") {
            nSlArr.push(curLvl[i].lastElementChild.innerHTML);
          }
        }
      }
    }
    else if (parseInt(curLvl[0].getAttribute("name")) < 7) {
      if (nextLvl[0].firstElementChild.disabled == true) {
        for (var j = 0; j < curLvl.length; j++) {
          if (curLvl[j].firstElementChild.value === "true") {
            ySlArr.push(curLvl[j].lastElementChild.innerHTML);
          }
        }
        for (var k = 0; k < prevLvl.length; k++) {
          if (prevLvl[k].firstElementChild.value === "false") {
            nSlArr.push(prevLvl[k].lastElementChild.innerHTML);
          }
        }
      }
      else if (nextLvl[0].firstElementChild.disabled == false) {
        for (var j = 0; j < nextLvl.length; j++) {
          if (nextLvl[j].firstElementChild.value === "true") {
            ySlArr.push(nextLvl[j].lastElementChild.innerHTML);
          }
        }
        for (var k = 0; k < curLvl.length; k++) {
          if (curLvl[k].firstElementChild.value === "false") {
            nSlArr.push(curLvl[k].lastElementChild.innerHTML);
          }
        }
      }
    }
    this.state.SkillYesArr = ySlArr;
    this.state.SkillNoArr = nSlArr;
  }

  /**
   * Passes array and level in state to SessionWindow
   */
  sendSkillList = () => {
    var yesArray = this.state.SkillYesArr;
    var noArray = this.state.SkillNoArr;
    var lvl = this.state.lvl1
    if (lvl === 0) {
      lvl = 1;
    }
    this.props.pushSlLvl(lvl);
    this.props.pushYesSL(yesArray);
    this.props.pushNoSL(noArray);
  }

  /**
  * Checks is any select boxes are still they're default
  * If they are, alert message shown to user, if not calls nextPage and sendSkillList function
  */
  check = () => {
    var carousel = Array.from(document.getElementsByClassName("Carousel_Item"))
    var select = Array.from(carousel[2].getElementsByTagName("select"))
    var selected;
    for (var i = 0; i < select.length; i++) {
      if (select[i].disabled === false) {
        if (select[i].value === "default") {
          selected = false;
        }
      }
    }
    if (selected === false) {
      alert("Please select all boxes")
    } else {
      this.sendSkillList();
      this.nextPage();
    }
  }

  /**
   * Calls sendSkillList and nextPage function on button click
   */
  handleOnClick = () => {
    this.check();
  }

  /**
   * Go to the Review page on button click
   */
  nextPage = () => {
    this.props.handlePageChange("SkillReviewPage")
  }

  render() {
    return (
      <div className="outter">
        <div className="inner">
          <table id="tableSL" class="table table-hover skilllevel">
            <thead>
              <tr className="skilllevel">
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
                <tr className="skilllevel">
                  <td><b>{name.skill_name}</b></td>
                  {[...Array(name.skill_descriptions[0].level - 1)].map((e, i) => (
                    <td></td>
                  ))}
                  {name.skill_descriptions.map((desc, index) => (
                    <td className="slData">
                      {desc.skill_criteria.map((desc2, index2) => (
                        <span name={desc.level} className={desc.level} >
                          <select required id={index2} disabled={this.state.disable} onChange={() => this.selectCount(desc.level)}>
                            <option value="default" selected>{this.state.lblDefault}</option>
                            <option value="true">&#10004;</option>
                            <option value="false">&#10006;</option>
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
      </div>
    );
  }
}