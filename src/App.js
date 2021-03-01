import {Route} from 'react-router-dom'
import './App.css';
import firstcomponent from './firstcomponent';
import Second from './Second';
import {useState} from 'react'

 function App() {
  const [item,setItems]=useState(['bike','ride','eat'])
  const increment=()=>{
    const newitem=[...item,document.getElementById('item').value]
    setItems(newitem)
  }

  return ( 
    <div className="App">
    
      <input type='text' id='item'/>
      <button onClick={increment}>Click</button>
      <ul align='left'>
        {
         
            <li>{
              item.map((value)=>(
                <li>{value}</li>
              ))
              }</li>   
          
        }
      </ul>
      </div>
  );
}


export default App;
