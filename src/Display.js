
const Display=({name ,blogs})=>{
    return(
        <div className="blog-view">
            <h2>{name}</h2>
            {blogs.map(blog=>{
                let {id,title,body,auther}=blog
                return(
                    <div key={id} className='blog-view'> 
                        <h3>{title}</h3>
                        <p>{body}</p>
                        <p>{auther}</p>
                        {/*<button onClick={()=>{handledelete(id)}}>Delete blog</button>*/}
                             {    /* create a comment component that loads all the comments on the blog*/ } 
                    </div>
                    
                    
            )})}
        </div>
    )

}
export default Display;