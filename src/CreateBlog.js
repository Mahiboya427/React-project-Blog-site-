import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog =()=>{
    const [title,setTitle]=useState('');
    const [auther,setAuther]=useState('shiva');
    const [body,setBody]=useState('');

    const history=useHistory();

    const data={title,auther,body};
    console.log(JSON.stringify(data));

    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch('http://localhost:5000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
    }).then(()=>{
        //history.go(1);//privious page
        history.push('/');//currunt location to go
    })
    }
    
    return(
        <div className="create">
            <h3>hello! Create our Blog Here</h3>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                type='text'
                onChange={(e)=>{setTitle(e.target.value)}} 
                required
                value={title}
                ></input>
                <label>author</label>
                <select 
                value={auther}
                onChange={(e)=>{setAuther(e.target.value)}}>

                    <option value='mahesh'>mahesh</option>
                    <option value='venkat'>venkat</option>
                    <option value='shiva'>shiva</option>

                </select>
                <label>write here..</label>
                <textarea
                required
                value={body}
                onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>
                <button>Add Blog</button>
            </form>
        </div>
    )
}
export default CreateBlog;