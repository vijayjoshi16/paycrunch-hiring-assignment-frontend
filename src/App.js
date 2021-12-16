import './App.css';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Explore from './components/Explore/Explore';
import Search from './components/Search/Search';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Explore />
      <Search />
      <a href="https://icons8.com/icon/132/search">Search icon by Icons8</a>
    </div>
  );
}

export default App;
