import React from 'react';
import './css/App.css';
//All the Components are imported into the App Component
import Auction from './Components/Auction/Auction';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Review/Review';
import Search from './Components/Search/Search';
import Sellers from './Components/Sellers/Sellers';
import Trending from './Components/Trending/Trending';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
      <Footer />
    </div>
  )
}

export default App