import React from 'react';
import CowList from './CowList.jsx'
import EntryBox from './EntryBox.jsx'
import CowDetails from './CowDetails.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'http://localhost:3000/api/cows',
      cows: []
    };
  }

  componentDidMount () {
    this.fetchCows();
  }

  fetchCows = () => {
    fetch(this.state.url, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      console.log('receiving and logging cows...');
      console.log(res);
      this.setState({cows: res});
    })

    .catch(err => console.error(err));
  }


  render () {
    return (
      //jsx goes in here
      <div>
        <CowDetails />
        <EntryBox />
        <CowList cows = {this.state.cows}/>
      </div>
    );
  }
}

export default App;