import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails=()=>{
    const {id}=useParams();
    const {data:blogs ,error,Loading}=useFetch(`http://localhost:5000/blogs/${id}`);
    //console.log(blogs);
    return(
        <div>
            <div>Blog blogDetails page for {id}</div>
                <div key={id} className='blog-details'>
                    {Loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    {blogs && (
                        <article>
                            <h3>{blogs.title}</h3>
                            <p>writen by:{blogs.auther}</p>
                            <p>{blogs.body}</p>
                        </article>
                    )}       
                </div>
        </div>
        
    )
}

export default BlogDetails; 