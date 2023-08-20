import './App.css';
import Search from './component/search/Search';
import Card from './component/card/Card';
import { useState } from 'react';
import Header from './component/header/Header';
import Footer from './component/footer/footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='App'>
      <Header/>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Card searchQuery={searchQuery} />
      <Footer/>
    </div>
  );
}

export default App;
