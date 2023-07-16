import React from 'react';
import CockTailList from '../CockTailList';
import SearchFrom from '../SearchFrom';

const Home = () => {
  return (
    <main>
      <SearchFrom/>
      <CockTailList/>
    </main>
  )
}

export default Home;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './turtorial-coctail/Navbar';
// import Home from './turtorial-coctail/pages/Home';
// import About from './turtorial-coctail/pages/About';
// import Error from './turtorial-coctail/pages/Error';
// import SingleCocktail from './turtorial-coctail/pages/SingleCocktail'
// import './App.css';

// function App() { 
//   return (
//    <Router>
//     <Navbar/>
//     <Routes>
//       <Route path='/' element={ <Home/> }/>
//       <Route path='about' element={ <About/> }/>
//       <Route path='*' element={ <Error/> }/>
//       <Route path='cocktail/:id' element={<SingleCocktail/>} />
//     </Routes>
  //  </Router>
//   );
// }

// export default App;