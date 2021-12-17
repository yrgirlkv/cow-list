import React from 'react';

class CowDetails extends React.Component {
  //boilerplate
  constructor(props) {
    super(props);
  }

  render () {return (
    <div>
      <h1>{this.props.cow.name}</h1>
      <br></br>
      {this.props.cow.description}
    </div>
  )}
}

export default CowDetails;