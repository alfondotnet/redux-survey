import React,{Component, PropTypes} from 'react';

class Results extends Component {

  renderResults() {
    const {list} = this.props;

    const totalValue = list.map(q => q.get('answer')).reduce((prev,curr) => { console.log(prev); return prev + curr;});

    return <div>
      Total value: {totalValue}
    </div>;

  }

  render() {
    return <div><h2>Results</h2>
      {this.renderResults()}
    </div>;
  }
}

Results.propTypes = {
  list: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Results;
