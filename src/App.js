
import './App.css';
import HelloWorld from './HelloWorld';
//import PFTest from './PFTest/index.js';
import  {useState}  from 'react';

const defaultName = 'Max'
const defaultProf = 'Arbetslö'

function App() {
  const [name, setName] = useState('');
  const [HWname, setHWname] = useState(defaultName)
  const [profession, setProfession] = useState('')
  const [hprofession, setHProfession] = useState(defaultProf)
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //alert(`Name posted: "${name}"`)
    console.log("Submit button pressed: " + name)
      setHWname(name);
      if (!name) {
        setHWname(defaultName)
     }
      setName('');
      setHProfession(profession);
      if (!profession) {
        setHProfession(defaultProf)
     }
      setProfession('');
    }

  console.log("Hello from App")
  return (
    <div className="App-header">
  
     
      <header className="App-header">
      <HelloWorld HWname={HWname} profession={profession} name={name} hprofession={hprofession} handleSubmit={handleSubmit} setName={setName} setHProfession={setHProfession} setProfession={setProfession}/>

      </header>
    </div>
  );
}

export default App;
