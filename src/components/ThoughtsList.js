import React from 'react';
import '../App.css'


function ThoughtsList(props) {
  return (
    <div className='ThoughtsList'>
      <h2>My tots go BRRRRRRRRRRRR!</h2>
      <ol>
      {props.thoughts.map((thought, index) => (
        <li key={index}>
          {thought.date}: {thought.thoughts}{' '}
          <button onClick={() => props.handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ol>
    </div>
  );
}

export default ThoughtsList;