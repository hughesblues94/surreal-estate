import '../Styles/app.css';
import AddProperty from './AddProperty';
import Navbar from './Navbar';
import Properties from './Properties';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Properties />} />
        <Route path='/add-property' element={<AddProperty />} />
      </Routes>
    </div>
  );
}

export default App;
