
import './App.css';
import HelloWorld from './HelloWorld';
import  ListPersons from './ListPersons';
//import PFTest from './PFTest/index.js';
import  {useState}  from 'react';




const defaultName = 'Max'
const defaultProf = 'Semi-Coder'
function App() {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState('');
  const [HWname, setHWname] = useState(defaultName)
  const [profession, setProfession] = useState('')
  const [hprofession, setHProfession] = useState(defaultProf)
  let listName = defaultName;
  let listProf = defaultProf;

  const addPerson = (evt) => {
    setPersons(persons => [...persons, {
      name: listName,
      profession: listProf,
      key: persons.length
    }]); 
  }


  const handleSubmit = (evt) => {
    evt.preventDefault();
    //alert(`Name posted: "${name}"`)
    
    console.log("Submit button pressed: " + name)
   
      listName = name;
      setHWname(name);
      if (!name) {
        setHWname(defaultName)
        listName = defaultName;

     }
     listProf = profession;
      setHProfession(profession);
      if (!profession) {
        setHProfession(defaultProf)
        listProf = defaultProf;
     }
    setName('');
    setProfession('');  
    addPerson();
  }

  
 
  console.log("Hello from App")
  return (
    <div className="App-header">
  
     
      <header className="App-header">
      <HelloWorld HWname={HWname} profession={profession} name={name} hprofession={hprofession} handleSubmit={handleSubmit} setName={setName} setHProfession={setHProfession} setProfession={setProfession} persons={persons} addPerson={addPerson}/>
      <ul className="List">
    {persons.map(person => <><li style={{ listStyleType: "none" }}><ListPersons name={person.name} profession={person.profession} Key={person.key} />
      </li></>
   )}
   </ul>
    
      </header>
    </div>
  );
}

export default App;
