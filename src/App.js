import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Explore from './components/Explore/Explore';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Explore />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
