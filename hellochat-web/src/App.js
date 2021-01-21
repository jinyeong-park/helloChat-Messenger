import './App.css';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <div className='app__header'>HelloChat</div>

      <div className="app__body">
        <Sidebar />
        <div className="chat"></div>
      </div>
    </div>
  );
}

export default App;
