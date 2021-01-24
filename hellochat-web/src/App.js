import React, { useState } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useStateValue } from './StateProvider'

function App() {
  // const [ {user, setUser] = useState(null);
  const [ { user }, dispatch ] = useStateValue();

  return (
    <div className="app">
      <div className='app__header'>HelloChat</div>
      {!user ? (
        <Login />
      ) : (

        <div className="app__body">
          <Router>
            <Sidebar />

            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                {/* <Chat /> */}
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  )
}

export default App;
