import { useState } from 'react';
import './App.css';
import {members} from './Dados/data'
import Routes from './Routes'


function App() {
  const [data, setData] = useState(members)
  const [ids, setId] = useState(6)
  const [novo, setNovo] = useState([])
  

  function handleAdd (cadastro) {
    
    setId(ids+1)
    const id = ids.toString()
    const insertId = {id, ...cadastro}
    
    setData([...data, insertId])
    console.log(insertId)
   
    

}
  



  return (
    <div className="App">
      <header className="App-header">
      <Routes data={data} handleAdd={handleAdd}/>

       
      </header>
    </div>
  );
}

export default App;
