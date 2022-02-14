 //custom hook  to fetch the data from url
import React,{useState,useEffect} from "react";



 const useFetch =(url)=>{

        const [data,setData]=useState(null)
        const [Loading,setLoading]=useState(true);
        const [error,setError]=useState(true);

/*
        const handledelete=(id)=>{
          console.log("delete",id)
          const newblogs=blogs.filter( bob => bob.id!==id);
          setblogs(newblogs);
*/




        useEffect( ()=>{

          const abortController=new AbortController();
            setTimeout( () => {fetch(url,{signal:abortController.signal})
            //.then(response => console.log(response.json()))
              .then(response =>{
                  if(!response.ok){
                    throw Error("could not fetch data.....")
                  }
                  return response.json(); 
              } )
                    
              .then(data => {
                  console.log(data)
                  setData(data);
                  setLoading(false);
    
                }).catch(error=>{
                    if (error.name==='AbortError'){
                      console.log('abort the fetch');
                    }else{
                      setLoading(false);
                    setError(error.message);  
                    }

                    
                });
              },2000)
                  //cleanup function for useEffect
                  return () => abortController.abort();
                  //return () => console.log('clean up');              
              
                //.then(response => console.log(response));
          //    console.log("useeffect ran");
          //    console.log(blogs);
              //setBlogs.(['empty array'])
          },[url])
          //[])
          //[blogs])
          //[name])



          return(
              {error,Loading,data}
          )
          
     

 }
 export default useFetch;