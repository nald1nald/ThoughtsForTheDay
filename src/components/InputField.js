import React from 'react';
import '../App'



function InputField(props) {
  return (
    <div>
      <label>Date:</label>
      <input type="date" value={new Date().toISOString().slice(0, 10)} disabled />
      <br />
      <label>Thoughts for the day:</label> <br />
      <textarea rows={10} cols={20} value={props.thoughts} onChange={props.handleThoughtsChange} placeholder='Haha tots go brrrrr!'/>
    </div>
  );
}

export default InputField;
