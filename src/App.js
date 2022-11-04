// React Router
import { Routes, Route } from 'react-router-dom';

// App pages
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
// Components
import Header from './components/Header';
import Footer from './components/Footer';

// APP
const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
    <Footer />
  </>
);

export default App;
