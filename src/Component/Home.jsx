import { Outlet } from "react-router-dom";
import Header from "./Header";


const Home = () => {
    return (
        <div className="text-center">
            <Header></Header>
            <h1>This is the home component</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;