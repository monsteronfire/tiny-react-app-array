import React from 'react';

class AnimalList extends React.Component {
  render() {
    const animals = ['Lemur', 'Sloth', 'Racoon', 'Panda', 'Otter', 'Kitling', 'Doggo'];

    return (
      <ul className='AnimalList'>
        {animals.map((animal) => {
          return (
            <li key={animal}>{animal}</li>
          )
        })}
      </ul>
    )
  }
}

export default AnimalList;
