import './App.css';
import React, { useState, useEffect } from 'react';
import InputField from './components/InputField';
import ThoughtsList from './components/ThoughtsList';

function App() {
  const [date, setDate] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [thoughtsList, setThoughtsList] = useState([]);
  const [selectedThoughtIndex, setSelectedThoughtIndex] = useState(null);

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleThoughtsChange(event) {
    setThoughts(event.target.value);
  }

  function handleSave() {
    const newThought = { date: new Date().toISOString().slice(0, 10), thoughts };
    setThoughtsList([...thoughtsList, newThought]);
    setDate('');
    setThoughts('');
    localStorage.setItem('thoughtsList', JSON.stringify([...thoughtsList, newThought]));
  }

  useEffect(() => {
    const storedThoughts = localStorage.getItem('thoughtsList');
    if (storedThoughts) {
      setThoughtsList(JSON.parse(storedThoughts));
    }
  }, []);

  function handleDelete(index) {
    const newThoughtsList = [...thoughtsList];
    newThoughtsList.splice(index, 1);
    setThoughtsList(newThoughtsList);
    localStorage.setItem('thoughtsList', JSON.stringify(newThoughtsList));
  }

  function handleUpdate(index) {
    const selectedThought = thoughtsList[index];
    setSelectedThoughtIndex(index);
    setDate(selectedThought.date);
    setThoughts(selectedThought.thoughts);
  }

  function handleSaveUpdate() {
    const updatedThought = { date, thoughts };
    const newThoughtsList = [...thoughtsList];
    newThoughtsList[selectedThoughtIndex] = updatedThought;
    setThoughtsList(newThoughtsList);
    setDate('');
    setThoughts('');
    setSelectedThoughtIndex(null);
    localStorage.setItem('thoughtsList', JSON.stringify(newThoughtsList));
  }

  return (
    <div className='container'>
      <h1>Thoughts For the day</h1>
      <InputField
        date={date}
        thoughts={thoughts}
        setThoughts={setThoughts}
        handleDateChange={handleDateChange}
        handleThoughtsChange={handleThoughtsChange}
      />
      {selectedThoughtIndex === null ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleSaveUpdate}>Update</button>
      )}
      <ThoughtsList 
        thoughts={thoughtsList} 
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}


export default App;
