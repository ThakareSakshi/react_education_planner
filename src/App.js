import {useState} from 'react';
import './App.css';
import AddPlanner from './components/AddPlanner';
import PlannerList from './components/PlannerList';

function App() {
  const [plannerList,setplannerList]=useState([]);

  const addToList=(usertext,hours)=>{
    console.log(usertext,hours);
    let newItem={usertext,hours}
    setplannerList([...plannerList,newItem])
  }

  return (
    <div className="App">
      <AddPlanner addToList={addToList}/>
      <PlannerList taskList={plannerList}/>
      
    </div>
  );
}

export default App;
