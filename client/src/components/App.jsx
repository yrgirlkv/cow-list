import React from 'react';
import CowList from './CowList.jsx'
import EntryBox from './EntryBox.jsx'
import CowDetails from './CowDetails.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'http://localhost:3000/api/cows',
      cows: ''
    };
  }

  componentDidMount () {
    this.fetchCows();
  }

  fetchCows = () => {
    fetch('http://localhost:3000/api/cows', {
      method: 'GET'
    })
    .then(res => {
      console.log('receiving and logging cows...');
      console.log(res);
    })
    .then(res => this.setState({cows: res}))
    .catch(err => console.error(err));
  }


  render () {
    return (
      //jsx goes in here
      <div>
        <CowDetails />
        <EntryBox />
        <CowList />
      </div>
    );
  }
}

export default App;