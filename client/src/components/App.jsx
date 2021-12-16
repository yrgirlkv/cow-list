import React from 'react';
import CowList from './CowList.jsx'
import EntryBox from './EntryBox.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      //jsx goes in here
      <div>
        {/* //hypothetical display component */}
        <EntryBox />
        <CowList />
      </div>
    );
  }
}

export default App;