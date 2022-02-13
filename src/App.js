import Navbar from './Navbar';
import Home from './Home';
import CreateBlog from './CreateBlog';

import { BrowserRouter } from 'react-router-dom';


//templates
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <div className='content'>
          <Home/>
          <CreateBlog/>
          </div>
        { /*<Example/>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
function App() {
  //let name=useState('john');
  //let setName=useState('jane')
  //setName();
  let [name,setName]=useState("mahesh")
  
  const handlechange=()=>{
    setName("shiva");
    //console.log("delete",action,e.target);
  }
  return (
    <div className="App">
      <p>{name}</p>
      <button onClick={handlechange}>chickme</button>
    </div>
  );
}

--------------------------------------------------------
function App() {
  //let [name,setName]=useState('mahesh');
  let name='mahesh'
  const handlechange=(action,e)=>{
    //setName("shiva");
    console.log("delete",action,e.target);
  }
  return (
    <div className="App">
      <p>{name}</p>
      <button onClick={(e)=>{handlechange('dlete')}}>chickme</button>
    </div>
  );
}
*/