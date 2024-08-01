import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import './App.css';

function App() {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path='/' exact element={<Users />}/>
          <Route path='/:userId/places' exact element={<UserPlaces />}/>
          <Route path='/places/new' exact element={<NewPlace />}/>
          <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
