/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const User = ({user}) => {
    const {email, id, name, website} = user
    return (
        <div className="">
            <div className="border border-gray-600 max-w-80 mx-auto rounded-xl">
            <h3>{name}</h3>
            <h3>Email: {email}</h3>
            <h3>Id: {id}</h3>
            <h3>Web: {website}</h3>
            <Link className="bg-lime-600 px-4 rounded-[5px]" to={`/users${id}`}>Show Daitels</Link>
            </div>
            
        </div>
    );
};

export default User;