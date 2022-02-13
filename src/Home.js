import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import useFetch from './useFetch';
import Display from './Display';


const Home=()=>{
  
    
  const {data:blogs,Loading,error}=useFetch(' http://localhost:5000/blogs'); 
  /*
    const [blogs,setBlogs]=useState(null)
//        {id:1,title:'Water',body:'water power',author:'mahesh'},
 //       {id:2,title:'Air',body:'air power',author:'shiva'},
   //     {id:3,title:'Fire',body:'fire power',author:'venkat'}
        
    const [Loading,setLoading]=useState(true);
    const [error,setError]=useState(true);
    //  ]);
  
    //const [name,setName]=useState("mahesh")
      const handledelete=(id)=>{
        console.log("delete",id)
        const newblogs=blogs.filter( bob => bob.id!==id);
        setblogs(newblogs);
      }
      */
      /*
      useEffect( ()=>{
        setTimeout( () => {fetch(' http://localhost:5000/blogs')
        //.then(response => console.log(response.json()))
          .then(response =>{
              if(!response.ok){
                throw Error("could not fetch data.....")
              }
              return response.json(); 
          } )
                
          .then(blogs => {
              console.log(blogs)
              setBlogs(blogs);
              setLoading(false);

            }).catch(error=>{
                setLoading(false);
                setError(error.message);
            });
          },2000
          )
            //.then(response => console.log(response));
      //    console.log("useeffect ran");
      //    console.log(blogs);
          //setBlogs.(['empty array'])
      },[])
      //[])
      //[blogs])
      //[name])
      */  
  
    return(
        <div className="home">
            {Loading && <div>Loading Data....</div>}
            {error && <div>{error}</div>}
            {blogs && <Display  blogs={blogs} name={"All blogs..."} />}
            {/*blogs && <Display  blogs={blogs} name={"All blogs..."} /*handledelete={handledelete}*/}
            {/*<Display blogs={blogs.filter(blog=>blog.author=='shiva')} name="blogs by shiva" handledelete={handledelete}></Display>*/}
            {/*<button onClick={()=>setName("shiva")}>changename</button>*/}
        </div>
    )
}
export default Home; 