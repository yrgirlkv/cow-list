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
      newCowName: '',
      newCowDesc: '',
      currentCow: {}
    };

    this.handleCowButton = this.handleCowButton.bind(this);
    this.handleCowNameInput = this.handleCowNameInput.bind(this);
    this.handleCowDescInput = this.handleCowDescInput.bind(this);
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


  handleCowButton (e) {
    e.preventDefault();
    let clickedCow = e.target.className;
    for (let stateCow of this.state.cows) {
      if (clickedCow === stateCow.name) {
        this.setState ({currentCow: stateCow})
      }
    }
  }

  handleCowNameInput (e) {
    e.preventDefault();
    this.setState({newCowName: e.target.value});
  }

  handleCowDescInput (e) {
    e.preventDefault();
    this.setState({newCowDesc: e.target.value});

  }

  handleCowSubmission (e) {
    e.preventDefault();
    console.log('firing submit');
    var newCow = {name: this.state.newCowName, description: this.state.newCowDesc}
    console.log(newCow);
    fetch(this.state.url, {
      method: 'POST',
      body: JSON.stringify(newCow)
    })
    .then(res => {
      console.log('posted cows');
      this.fetchCows();
    })
    .catch(err => console.error(err))
  }

  render () {
    return (
      //jsx goes in here
      <div>
        <CowDetails cow = {this.state.currentCow}/>
        <h1>enter new cow</h1>
        <EntryBox handleCowDescInput={this.handleCowDescInput} handleCowNameInput = {this.handleCowNameInput}/>
        <h1>list of cows</h1>
        <CowList cows = {this.state.cows} clickHandler = {this.handleCowButton}/>
      </div>
    );
  }
}

export default App;