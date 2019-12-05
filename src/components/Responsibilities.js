import React from 'react';
import { Container, Row, Col, Form, Card, ListGroup } from 'react-bootstrap';
import './css/Responsibilities.css'

export default class Responsibilities extends React.Component {
  constructor() {
    super();
    this.state = {
      resp: [
        {
          "responsibility_name": "Autonomy",
          "responsibility_descriptions": [
            {
              "level": 1,
              "responsibility_criteria": [
                {
                  "responsibility_criterion": "Works under supervision."
                },
                {
                  "responsibility_criterion": "Uses little discretion."
                },
                {
                  "responsibility_criterion": "Is expected to seek guidance in unexpected situations."
                }
              ]
            },
            {
              "level": 2,
              "responsibility_criteria": [
                {
                  "responsibility_criterion": "Works under routine direction."
                },
                {
                  "responsibility_criterion": "Uses limited discretion in resolving issues or enquiries."
                },
                {
                  "responsibility_criterion": "Works without frequent reference to others."
                }
              ]
            },
            {
              "level": 3,
              "responsibility_criteria": [
                {
                  "responsibility_criterion": "Works under general direction."
                },
                {
                  "responsibility_criterion": "Uses discretion in identifying and responding to complex issues and assignments."
                },
                {
                  "responsibility_criterion": "Receives specific direction, accepts guidance and has work reviewed at agreed milestones. Determines when issues should be escalated to a higher level."
                }
              ]
            },
            {
              "level": 4,
              "responsibility_criteria": [
                {
                  "responsibility_criterion": "Works under general direction within a clear framework of accountability."
                },
                {
                  "responsibility_criterion": "Exercises substantial personal responsibility and autonomy."
                },
                {
                  "responsibility_criterion": "Plans own work to meet given objectives and processes."
                }
              ]
            }
          ]
        },
        {
          "responsibility_name": "Influence",
          "responsibility_descriptions": [
            {
              "level": 1,
              "responsibility_criteria": [
                {
                  "responsibility_criterion": "Minimal influence."
                },
                {
                  "responsibility_criterion": "May work alone, or interact with immediate colleagues."
                }
              ]
            },
            {
              "level": 2,
              "responsibility_criteria": [
                {
                  "responsibility_criterion": "Interacts with and may influence immediate colleagues."
                },
                {
                  "responsibility_criterion": "May have some external contact with customers, suppliers and partners."
                },
                {
                  "responsibility_criterion": "May have more influence in own domain."
                },
                {
                  "responsibility_criterion": "Aware of need to collaborate with team and represent users/customer needs."
                }
              ]
            }
          ]
        }
      ],

      lblDefault: "Select",
      lblYes: "Yes",
      lblNo: "No",
      disableLvl2: true,
      disableLvl3: true,
      disableLvl4: true,
      disableLvl5: true,
      disableLvl6: true,
      disableLvl7: true
    }
    // tableData = () => {
    //     return this.state.resp.map(resName => {
    //         return (
    //             <tr>
    //                 <td className="headcol">{resName.responsibility_name}</td>
    //                 {resName.responsibility_descriptions.map(resDesc => {
    //                     {resDesc.responsibility_criteria.map(resCrit => {

    //                     })}
    //                 })}
    // <td id="lvl1">
    //     <span style={{ display: "inline-flex" }}>
    //         <select id="sel" onChange={() => this.count1(1)}>
    //             <option name="checked" value="select">{this.state.lblDefault}</option>
    //             <option value="true">{this.state.lblYes}</option>
    //             <option value="false">{this.state.lblNo}</option>
    //         </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         <p>{item.lvl1}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //     </span>
    // </td>
    //             </tr>
    //         )
    //     })
    // }
  }


  count1 = (index) => {
    var tab = document.getElementById("list");
    var row = tab.rows.length;
    var tr, td;
    var count = 0;
    var per = 0;
    // if (index < 0) {
    //   return null;
    // }
    var result = [];
    for (var i = 0, j = 0; i < row; i++) {
      for (j = 1; j < row; j++) {
        result.push(tab.rows[i].cells[index+1]);
        console.log(tab.rows[i].cells[index+1]);
        
      }
    }
    console.log(result.length);
    
    // for (var i = 0; i < row; i++) {
    //   tr = tab.rows[i];
    //   console.log(tr);
    //   td = tr.cells[index + 1];
    //   console.log(td);
    //   var a = td.getElementsByTagName("span");
    //   console.log(a.length);
    //   for (var j = 0; j < a.length; j++) {
    //     if (a[j].firstElementChild.value == "true") {
    //       count++;
    //     }
    //   }
    // }
    
    // console.log(count);
    // per = ((count / a.length) * 100).toFixed(2);
    // console.log(per);
    // if (per > ((2 / 3) * 100)) {
    //   switch (col) {
    //     case 1:
    //       this.setState({
    //         disableLvl2: false,
    //       })
    //       break;
    //     case 2:
    //       this.setState({
    //         disableLvl3: false
    //       })
    //       break;
    //     case 3:
    //       this.setState({
    //         disableLvl4: false
    //       })
    //       break;
    //     case 4:
    //       this.setState({
    //         disableLvl5: false
    //       })
    //       break;
    //     case 5:
    //       this.setState({
    //         disableLvl6: false
    //       })
    //       break;
    //     case 6:
    //       this.setState({
    //         disableLvl7: false
    //       })
    //       break;
    //   }
    // } else {
    //   switch (col) {
    //     case 1:
    //       this.setState({
    //         disableLvl2: true,
    //         disableLvl3: true,
    //         disableLvl4: true,
    //         disableLvl5: true,
    //         disableLvl6: true,
    //         disableLvl7: true
    //       })
    //       break;
    //     case 2:
    //       this.setState({
    //         disableLvl3: true,
    //         disableLvl4: true,
    //         disableLvl5: true,
    //         disableLvl6: true,
    //         disableLvl7: true
    //       })
    //       break;
    //     case 3:
    //       this.setState({
    //         disableLvl4: true,
    //         disableLvl5: true,
    //         disableLvl6: true,
    //         disableLvl7: true
    //       })
    //       break;
    //     case 4:
    //       this.setState({
    //         disableLvl5: true,
    //         disableLvl6: true,
    //         disableLvl7: true
    //       })
    //       break;
    //     case 5:
    //       this.setState({
    //         disableLvl6: true,
    //         disableLvl7: true
    //       })
    //       break;
    //     case 6:
    //       this.setState({
    //         disableLvl7: true
    //       })
    //       break;
    //   }
    // }
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
              {/* {this.tableData()} */}
              {this.state.resp.map((name, index) => (
                <tr>
                  <td><b>{name.responsibility_name}</b></td>
                  {name.responsibility_descriptions.map((desc, index) => (
                    <td>
                      {desc.responsibility_criteria.map((desc2, index2) => (
                        <span>
                          <select id="sel" onChange={() => this.count1(index)}>
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