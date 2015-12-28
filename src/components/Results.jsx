import React,{ Component, PropTypes } from 'react';
import { Panel, Row, Col, Button } from 'react-bootstrap';
import { answer} from '../actions/question';
import { Link } from 'react-router';

class Results extends Component {

  static propTypes = {
    list: PropTypes.object
  };

  answeredQuestions() {
    const {list, actions} = this.props;
    const buttons = list.filter(q => q.get('answer') !== null)
               .map((aq,k) => <Col key={'ansq_'+ k} lg={4} md={4} xs={12}>
      <Button
        onClick={() => actions.answer(k,null)}>
        <p><strong>{aq.get('questionText')}</strong></p>
        <p>{aq.get('possibleAnswers').get(aq.get('answer'))}</p>
      </Button>
    </Col>).toList();

    return buttons;
  }

  renderResults() {
    const {list} = this.props;
    const totalValue = list.map(q => q.get('answer')).reduce((reduction,value) => reduction + value);

    return <Row>
      <Col lg={12} md={12} xs={12}>
      Total value: {totalValue}
      </Col>
      <Col lg={12} md={12} xs={12}>
        <h4>Answers so far</h4>
        {this.answeredQuestions()}
      </Col>
    </Row>;
  }

  linkReview() {
    const {list, countAnswered, countQuestions} = this.props;

    if (countAnswered() === countQuestions()) {
      return "All questions are answered";
    } else {
      return <Link to="/">Review {countQuestions() - countAnswered()} questions</Link>
    }
  }

  render() {
    if (this.answeredQuestions().size > 0) {
      return <Row>
      <Col xs={12} md={12} lg={12}>
        <h2>Review questions</h2>
        {this.linkReview()}
        <h2>Results</h2>
        <Panel header={<h3>All results</h3>}>
          {this.renderResults()}
        </Panel>
        </Col>
      </Row>;
    } else {
      return null;
    }
  }
}

export default Results;
