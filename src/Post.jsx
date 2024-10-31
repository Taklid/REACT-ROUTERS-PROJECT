import { useLoaderData } from "react-router-dom";
import PostSingel from "./PostSingel";


const Post = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div className="grid grid-cols-4 gap-5">
                {
                   posts.map(post => <PostSingel key={post.id} post={post}></PostSingel>)
                }
            </div>
        </div>
    );
};

export default Post;