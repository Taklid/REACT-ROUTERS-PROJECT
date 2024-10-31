// eslint-disable-next-line no-unused-vars
import {  useLoaderData, useNavigate } from "react-router-dom";


const PostDtls = () => {
    const post =useLoaderData();
    const {id, titel, body} = post;
    const navigate = useNavigate();
    const handelGoBack = () => {
        navigate(-1)
    }
    
    return (
        <div>
            <h3>Post Details</h3>
            <p>Titel: {titel}</p>
            <p>Des: {body}</p>
            <p>Id: {id}</p>
            <button className="hover:bg-red-500 bg-pink-600 px-2 rounded-lg hover:text-yellow-200" onClick={handelGoBack}>Go Back</button>
            
            
        </div>
    );
};

export default PostDtls;