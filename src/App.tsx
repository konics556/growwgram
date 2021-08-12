import './App.css';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Feed from './views/Feed/Feed';
import UserDetails from './views/UserDetails/UserDetails';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" exact component={Feed} />
        <Route path="/userdetails/:username" component={UserDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;