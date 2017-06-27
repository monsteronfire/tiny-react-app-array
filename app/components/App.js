import React from 'react';
import ItemList from './ItemList';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <ItemList/>
      </div>
    )
  }
}

module.exports = App;
