import './App.css';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Search from './components/Search/Search';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Search />
    </div>
  );
}

export default App;
