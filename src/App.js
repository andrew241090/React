import Notebook from "./components/notebook/Notebook";
import Notebooks from "./components/Notebooks/Notebooks";

import User from "./components/User/User";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/posts";
import Comments from "./components/Comments/comments";
import './style.css'


const App = () => {

    return (<div>
        <div className={'main'}>
            <Users/>
            <Posts/>
        </div>
            <hr/>
        <div>
    <Comments/>
        </div>
        </div>
    );

};

export default App;
