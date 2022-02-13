 //custom hook  to fetch the data from url
import React,{useState,useEffect} from "react";



 const useFetch =(url)=>{

        const [data,setData]=useState(null)
        const [Loading,setLoading]=useState(true);
        const [error,setError]=useState(true);





        useEffect( ()=>{
            setTimeout( () => {fetch(url)
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
                    setLoading(false);
                    setError(error.message);
                });
              },2000
              )
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