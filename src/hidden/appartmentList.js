import React, { useState, useEffect } from 'react';
import './appartmentList.css'; // Import CSS file properly

function Appartment() {
  const [listLessers, setListLessers] = useState(['Maks', 'Vika', 'Volodia']);

  const [newLesser, setNewLesser] = useState('');
  const [nameToDelete, setNameToDelete] = useState('');
  const [elart, setElart] = useState('');
  const [open, setOpen] = useState(false);

  const portalText = e => {
    const valueTarget = e.target.value;
    setNewLesser(valueTarget);
  };

  const portalDeleteText = e => {
    const valueTargetD = e.target.value;
    setNameToDelete(valueTargetD);
  };

  const handleDelete = name => {
    const updatedList = listLessers.filter(lesser => lesser !== name);
    setListLessers(updatedList);
    setNameToDelete('');
  };

  const addPerson = () => {
    if (!newLesser.trim()) {
      setElart('Please enter a valid name.');
    } else if (listLessers.includes(newLesser.trim())) {
      setElart('This name already exists.');
    } else if (listLessers.length >= 4) {
      setElart("It can't be more than 4 Lesseers");
    } else {
      setListLessers([...listLessers, newLesser.trim()]);
      setElart(`Welcome ${newLesser.trim()}`);
      setNewLesser('');
    }
  };

  return (
    <main>
      <div className="manageList">
        <div className="signIn">
          <input
            className="newLesser"
            onChange={portalText}
            value={newLesser}
            placeholder="Enter new name"
          />
          <button onClick={addPerson}>Add person</button>
        </div>
        <div className="signOut">
          <input
            onChange={portalDeleteText}
            className="cancelLesser"
            placeholder="Enter name to delete"
            value={nameToDelete}
          />
          <button
            disabled={!nameToDelete.trim()}
            onClick={() => handleDelete(nameToDelete.trim())}
            className="btn"
          >
            Cancel person
          </button>
        </div>
      </div>

      <div className="blockList">
        <div>
          <button className="listButton" onClick={() => setOpen(!open)}>
            {open ? 'Hide your List' : 'Look at your List'}: {elart}
            <br />
            {open && listLessers.map((lesser, index) => <p className='nameLeesser' key={index}>{lesser}</p>)}
          </button>
        </div>
      </div>
    </main>
  );
}

export default Appartment;
