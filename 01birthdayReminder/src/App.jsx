import React, { useState } from 'react'
import data from './data';
import List from './List';

const App = () => {

  const[people, setPeople] = useState(data);

  const setBithday = () => {
    setPeople([]);
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays</h3>
        {/*setting people prop to people state value in the list component*/}
        <List people={people}/>
        <button onClick={setBithday}>Clear</button>
      </section>
    </main>
  )
}

export default App
