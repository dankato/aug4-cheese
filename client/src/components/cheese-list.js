import React from 'react';
import {fetchCheeses} from '../actions/cheese'

export class CheeseList extends React.Component {
  
    componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    const cheeses = this.props.cheeses.map((cheese, index) =>
      <li key={index}>
        {cheese}
      </li>
    );
    console.log(this.props);
    console.log(cheeses);
    return (
      <div className="cheese-component">
        <ul>
          {cheeses}
        </ul>
      </div>
    );
  }
}

export default CheeseList;
