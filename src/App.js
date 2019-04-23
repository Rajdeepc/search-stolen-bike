import React, { useState } from 'react';
import { IncidentList } from './components/incident-list';
import { SearchList } from './components/search-form';
function App() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">Police Department of Berlin</h1>
      <h2 className="subtitle">Stolen Bykes</h2>
      <SearchList />
      <IncidentList></IncidentList>
    </div>
  );
}

export default App;