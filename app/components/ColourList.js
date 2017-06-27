import React from 'react';

class ColourList extends React.Component {
  render() {
    const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    return (
      <div>
        <ul className='colour-list'>
          {colours.map((colour) => {
            return (
              <li key={colour}>{colour}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

module.exports = ColourList;
