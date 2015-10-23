import React,{Component, PropTypes} from 'react';
import {Panel, Row, Col, Button} from 'react-bootstrap';
import {answer} from '../actions/question';

class Results extends Component {

  answeredQuestions() {
    const {list,dispatch} = this.props;
    const buttons = list.filter(q => q.get('answer') !== null)
               .map((aq,k) => <Col key={'ansq_'+ k} lg={2} md={4} xs={4}>
      <Button
        onClick={() => dispatch(answer(k,null))}>
        {aq.get('questionText')} -> {aq.get('possibleAnswers').get(aq.get('answer'))}
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

  render() {

    if (this.answeredQuestions().size > 0) {
      return <Row>
      <Col xs={12} md={12} lg={12}>
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

Results.propTypes = {
  list: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Results;
