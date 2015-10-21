import React,{Component, PropTypes} from 'react';

class Results extends Component {

  renderResults() {

    const {list} = this.props;

    // assumming we are adding up the answers!
    const totalValue = list.reduce((prev, curr) => prev.get('answer') + curr.get('answer'));

    return <div>
      Total value: {totalValue}
    </div>;

  }

  render() {
    return <div><h2>Resultados kisos</h2>
      {this.renderResults()}
    </div>;
  }
}

Results.propTypes = {
  list: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Results;
