// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// App pages
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
// Components
import Header from './components/Header';
import Footer from './components/Footer';

// APP
const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/Calculator'} element={<Calculator />} />
          <Route path={'/quote'} element={<Quote />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
