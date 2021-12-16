import React from 'react';

class EntryBox extends React.Component {
  //boilerplate
  constructor(props) {
    super(props);
  }

  handleCowSubmission () {
    event.preventDefault();
  }

  handleCowInput () {}

  render () {
    return (
      <div>
        <form onSubmit = {this.handleCowSubmission}>
          <textarea onChange = {this.handleCowInput}></textarea>
          <button type = "submit">Submit new cow</button>
        </form>>
      </div>
    )
  }
}

export default EntryBox;