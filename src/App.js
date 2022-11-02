import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Quote from './components/Quote';

// React Router
import { Routes, Route } from 'react-router-dom';

// APP
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/Calculator'} element={<Calculator />} />
        <Route path={'/quote'} element={<Quote />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
