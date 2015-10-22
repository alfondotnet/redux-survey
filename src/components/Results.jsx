import React,{Component, PropTypes} from 'react';
import {Panel} from 'react-bootstrap';

class Results extends Component {

  renderResults() {
    const {list} = this.props;
    const totalValue = list.map(q => q.get('answer')).reduce((reduction,value) => reduction + value);

    return <div>
      Total value: {totalValue}
    </div>;
  }

  render() {
    return <div><h2>Results</h2><Panel header={<h3>All results</h3>}>
      {this.renderResults()}
    </Panel>
    </div>;
  }
}

Results.propTypes = {
  list: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Results;
