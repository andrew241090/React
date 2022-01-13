import Notebook from "./components/notebook/Notebook";
import Notebooks from "./components/Notebooks/Notebooks";

import './Spacex/spacex';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/posts";
import Comments from "./components/Comments/comments";

import './style.css'
import Flights from "./Flights/flights";


const App = () => {

    return (
        <div>
    {/*    <div className={'main'}>*/}
    {/*        <Users/>*/}
    {/*        <Posts/>*/}
    {/*    </div>*/}
    {/*        <hr/>*/}
    {/*    <div className={'coment'}>*/}
    {/*<Comments/>*/}
    {/*    </div>*/}
        <Spacex/>
        </div>
    );

};

export default App;
