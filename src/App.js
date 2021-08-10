import './App.css';
import Create from './components/create';
import Read from './components/read';

function App() {
  return (
    <div className="main">
      <div>
        <h3> React Crud Operations</h3>
      </div>
      <div>
        <Create />
      </div>
      <div style={{ marginTop: 20 }}>
        <Read />
      </div>
    </div>
  );
}

export default App;
