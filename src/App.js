// React Router
import {
  Routes, Route, BrowserRouter, Outlet,
} from 'react-router-dom';

// App pages
import CalculatorPage from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
// Components
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

// APP
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<div>404 Page...</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
