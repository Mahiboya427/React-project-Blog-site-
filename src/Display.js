import {Link} from "react-router-dom";
const Display=({name ,blogs})=>{
    return(
        <div className="blog-view">
            <h2>{name}</h2>
            {blogs.map(blog=>{
                let {id,title,body,auther}=blog
                return(
                    <div key={id} className='blog-view'>
                        <Link to={`/blogs/${id}`}>
                            <h3>{title}</h3>
                            <p>{body}</p>
                            <p>{auther}</p>
                        </Link> 
                        {/*<button onClick={()=>{handledelete(id)}}>Delete blog</button>*/}
                             {    /* create a comment component that loads all the comments on the blog*/ } 
                    </div>
                    
                    
            )})} 
        </div>
    )

}
export default Display;