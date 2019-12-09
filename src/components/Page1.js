import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default class Page1 extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {
        reports: []
    }
}

  getReports = () => {
    fetch(`http://localhost:2500/API/getReportListByDate/desc`)
      .then(response => response.json())
      .then(reports => this.setState({ reports: reports }))
  }

  componentDidMount = () => {
    this.getReports();
  }
  
  render() {
    
    var reviews = <ul>
    {this.state.reports.map(review => {
      let date = new Date(review.date_created)
      return <li><a href="/review">Review on the {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</a></li>
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
