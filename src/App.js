import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Header from './components/Header';
import Footer from './components/Footer';

// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
