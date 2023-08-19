import './App.css';
import Search from './component/search/Search';
import Card from './component/card/Card';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='App'>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Card searchQuery={searchQuery} />
    </div>
  );
}

export default App;
