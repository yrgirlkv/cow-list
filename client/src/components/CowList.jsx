import React from 'react';

class CowList extends React.Component {
  //boilerplate
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <form>
          {this.props.cows.map (cow => {
            return (
              <div key = {cow.name}>{cow.name}
              <button className={cow.name} onClick = {this.props.clickHandler}>Display</button>
              </div>
            )}
          )}
        </form>
      </div>
    )
  }
}

export default CowList;