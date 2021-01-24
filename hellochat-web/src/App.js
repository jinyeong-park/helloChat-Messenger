import React, { useState } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {/* <div className='app__header'>HelloChat</div> */}
      {!user ? (
        <h1>Login</h1>
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
