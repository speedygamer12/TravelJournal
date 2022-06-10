import React from 'react';

import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data'

function App() {
  const len = data.length;
  const cards = data.map((item) =>{
    return (
      <div>
        <Card 
        key={item.id}
        last= {len == item.id}
        {...item}/>
      </div>
    )
  })
  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
