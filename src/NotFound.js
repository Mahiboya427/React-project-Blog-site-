import { Link } from "react-router-dom";

const NotFound=()=>{
    return(
        <div className="not-found">
            <h3>OPPS! page not found</h3>
            <Link to='/'>
            <p>Looking for blogs? go to our 
            homepage</p>
            </Link>
        </div>
    )
}
export default NotFound;