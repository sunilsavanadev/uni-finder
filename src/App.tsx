import { useState } from 'react';
import './App.css';
import AdminPanel from './AdminPanel/AdminPanel';

function App() {
  const enum screentype {
    adminpanel="adminpanel",
  }
  const[currentscreen,setcurrentscreen]=useState(screentype.adminpanel)
  const getScreen=()=>{
    switch(currentscreen){
      case(screentype.adminpanel):
        return <AdminPanel/>
    }
  }
  return (
    <div>
      {getScreen()}
    </div>
  );
}

export default App;
