import React from 'react';
import CowList from './CowList.jsx'
import EntryBox from './EntryBox.jsx'
import CowDetails from './CowDetails.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'http://localhost:3000/api/cows',
      cows: [],
      newCow: {},
      currentCow: {}
    };

    this.clickHandler = this.clickHandler.bind(this);
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

  setCurrentCow(givenCow) {
    for (let stateCow of this.state.cows) {
      if (givenCow === stateCow.name) {
        this.setState ({
          currentCow: stateCow
        })
      }
    }
  }

  clickHandler (e) {
    e.preventDefault();
    console.log('clicked');
    let clickedCow = e.target.className;
    this.setCurrentCow(clickedCow);
  }

  render () {
    return (
      //jsx goes in here
      <div>
        <CowDetails cow = {this.state.currentCow} setCurrentCow = {this.setCurrentCow}/>
        <h1>enter new cow</h1>
        <EntryBox />
        <h1>list of cows</h1>
        <CowList cows = {this.state.cows} clickHandler = {this.clickHandler}/>
      </div>
    );
  }
}

export default App;