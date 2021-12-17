import React from 'react';

class EntryBox extends React.Component {
  //boilerplate
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <form onSubmit = {this.props.handleCowSubmission}>
          <input type="text" onChange = {this.props.handleCowNameInput} placeholder="Name"></input>
          <br></br>
          <textarea onChange = {this.props.handleCowDescInput} placeholder="Description"></textarea>
          <button type = "submit">Submit new cow</button>
        </form>>
      </div>
    )
  }
}

export default EntryBox;