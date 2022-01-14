import Notebook from "./components/notebook/Notebook";
import Notebooks from "./components/Notebooks/Notebooks";


import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

import './style.css'



const App = () => {

    return (
        <div>
        <div className={'main'}>
            <Users/>
            <Posts/>
        </div>
            <hr/>
        <div className={'coment'}>
    <Comments/>
        </div>
        </div>
    );

};

export default App;
