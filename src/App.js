import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Main from './components/Main';
import DogPage from './components/DogPage';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/:id" element={<DogPage />}/>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
