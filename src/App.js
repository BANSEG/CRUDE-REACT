import CrudeApi from './Crude'
import './App.css';
import Apilist from '.components/ApiList';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <>
      <CrudeApi>
          <Apilist/>
      </CrudeApi>
   
    </>
    </div>
  );
}

export default App;
