import { Fragment } from 'react/cjs/react.production.min';
import  './App.module.css';
import Card from './Card';
import Inputs from './components/Inputs';

function App() {
  return (
    <Fragment >
      
    <h1>React Calculator</h1>
    <Card>
     <div><label>1234567890</label></div> 
     <div>answer</div>
      <Inputs/>
    </Card>
    </Fragment>
      
  );
}

export default App;
