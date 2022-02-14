import Navbar from './Navbar';
import Home from './Home';
import CreateBlog from './CreateBlog';

import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


//templates
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <div className='content'>
          <Switch>
            <Route exact path='/'>
            {/*<Route exact path='/' component={home}></Route> another method!!*/}
              <Home/>
            </Route>
            <Route exact path='/create'>
              <CreateBlog/>
            </Route>
            {/* route parameter*/}
            <Route path='/blogs/:id'>
                <BlogDetails/>
            </Route>
            <Route path='*'>
                <NotFound/>
            </Route>
          </Switch>
          </div>
        { /*<Example/>*/}
      </Router>
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