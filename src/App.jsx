import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import SearchList from './components/SearchList.jsx';


function App() {
  const [results, setResults] = useState([]);

  return (
    <div className='App'> 
    <div className="search-bar-container">
        <SearchBar setResults={setResults} />
         <SearchList  results={results}/>
      </div>
    </div>
  )
}

export default App
