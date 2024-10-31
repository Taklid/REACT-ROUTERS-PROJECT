import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {
    const users =useLoaderData();
    return (
        <div>
            <h2>User: {users.length}</h2>
            <h2>Thank you our website</h2>
           <div className="grid grid-cols-3 gap-4 py-3 border border-lime-400">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
           </div>
        </div>
    );
};

export default Users;