import React from 'react';

class CowDetails extends React.Component {
  //boilerplate
  constructor(props) {
    super(props);
  }

  render () {
    return
      (
        <div>
          {this.props.cow.name}
          <br></br>
          {this.props.cow.description}
        </div>
      )
  }
}

export default CowDetails;