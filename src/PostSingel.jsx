/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";


const PostSingel = ({post}) => {
    const {id, titel, body} = post;
    const navigate =useNavigate();
    const handelClick = () => {
        navigate(`/post/${id}`)

    }
    return (
        <div className="border border-lime-500 max-w-96 mx-auto rounded-lg">
            <h3>{id}</h3>
            <h3>Titel: {titel}</h3>
            <h3>Body: {body}</h3>
            <Link className="bg-purple-500 px-3 rounded-lg" to={`/post/${id}`}>Post details</Link>
            <Link to={`/post/${id}`}></Link>
            <Link to={`/post/${id}`}><button className="bg-yellow-600 px-2 rounded-lg">Show Details</button></Link>
            <button onClick={handelClick}>Click</button>
            
        </div>
    );
};

export default PostSingel;