import React from 'react';

class CowList extends React.Component {
  //boilerplate
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {this.props.cows.map (cow => <div key = {cow.name}>{cow.name}</div>)}
      </div>
    )
  }
}

export default CowList;