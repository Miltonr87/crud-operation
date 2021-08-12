import './App.css';
import Create from './components/create';
import Read from './components/read';
import { BrowserRouter , Route } from 'react-router-dom';
import Update from './components/update';
import Delete from './components/delete';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div>
          <h3> React Crud Operations</h3>
        </div>
        <div>
          <Route exact path = '/' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path = '/read' component={Read} />
        </div>
        <Route path = '/update' component={Update} />
        <Route path = '/delete' component={Delete} />
       
      </div>
    </BrowserRouter>
  );
}

export default App;
