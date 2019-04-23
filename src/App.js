import React from 'react';
import SearchList from './components/search-form';
function App() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">Police Department of Berlin</h1>
      <h2 className="subtitle">Stolen Bykes</h2>
      <SearchList />
    </div>
  );
}

export default App;