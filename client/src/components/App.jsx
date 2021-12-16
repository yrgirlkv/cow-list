import React from 'react';
import CowList from './CowList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      //jsx goes in here
      <div>
        //hypothetical display component
        :T
        //hypothetical update component
        //hypothetical list component
        <CowList />
      </div>
    );
  }
}

export default App;