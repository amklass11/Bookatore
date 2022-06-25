import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>

      <nav className="header-container">
        <div className="navbar">
          <h1 className="h1-header">Booksstore CMS</h1>
          <ul className="links-container">
            <li><Link to="/">BOOKS</Link></li>
            <li className="grey-font"><Link to="/categories">CATEGORIES</Link></li>
          </ul>
        </div>
        <i className="user-icon material-symbols-outlined">account_circle</i>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
