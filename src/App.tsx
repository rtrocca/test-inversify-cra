import React, {useEffect, useState} from 'react';

import './App.css';

import {myContainer} from './di/di.config';
import { Warrior } from './di/interfaces';
import { TYPES } from './di/types';

function App() {

  const [warrior, setWarrior] = useState<Warrior>();

  useEffect( () => {
    const ninja = myContainer.get<Warrior>(TYPES.Warrior);
    setWarrior(ninja);
  }, []);
  return (
    <div className="App">
      { warrior && <p> My Warrior {warrior?.fight()} and {warrior?.sneak()}</p>}
    </div>
  );
}

export default App;
