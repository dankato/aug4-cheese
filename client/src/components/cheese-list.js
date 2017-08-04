import React from 'react';

export class CheeseList extends React.Component {
    // console.log('im inside CheeseList')

    render() {
        const cheeses = this.props.cheeses.map((cheese, index) => (
            <li key={index}>{cheese}</li>
        ));
        console.log(this.props);
        console.log(cheeses);
        return <div className="cheese-component"><ul>{cheeses}</ul></div>;
    };
}

export default CheeseList;