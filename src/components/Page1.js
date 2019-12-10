import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default class Page1 extends React.Component {
  
  /**
   * sets up the state
   * 
   * @param props 
   */
  constructor(props) {

    super(props);

    this.state = {
        reports: []
    }
}

  /**
   * gets the reports from the database
   * 
   */
  getReports = () => {
    fetch(`http://localhost:2500/API/getReportListByDate/desc`)
      .then(response => response.json())
      .then(reports => this.setState({ reports: reports }))
  }

  /**
   * calls the getReports function when 
   * loaded
   * 
   */
  componentDidMount = () => {
    this.getReports();
  }
  
  /**
   * displays the information in a row/column structure
   * 
   */
  render() {
    // sets up the review variable with an ordered list of review dates
    var reviews = <ul>
    {this.state.reports.map(review => {
      let id = review._id
      let date = new Date(review.date_created)
      let href = "/review/" + id
      return <li><a href={href}>Review on the {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</a></li>
    })}
    </ul>

    return  <Container>
    <Row>
        <Col>
            <h1>SFIA Development</h1>
        </Col>
    </Row><br/><br/>
    <Row>
        <Col md={{ span: 3, offset: 1 }}>
            <a href="/session"><u><h2>Review my SFIA level</h2></u></a>
        </Col>
    </Row><br/>
    <Row>
        <Col md={{ span: 3, offset: 1 }}>
            <h2>Previous Reviews</h2>
        </Col>
    </Row><br/>
    <Row>
      <Col md={{ span: 3, offset: 1 }}>
        {reviews}
      </Col>
    </Row>
    
</Container>
  }
}
