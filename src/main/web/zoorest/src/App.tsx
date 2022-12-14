import {Add} from "./pages/Add";
import {All} from "./pages/All";
import {Info} from "./pages/Info";
import {Navbar} from "./components/Navbar";
import {Route, Routes} from "react-router-dom"
import {Animal} from "./pages/Animal";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div>
                <Routes>
                    <Route path={"/"} element={<Info/>}/>
                    <Route path={"/all"} element={<All/>}/>
                    <Route path={"/new"} element={<Add/>}/>
                    <Route path={"/"} element={<Info/>}/>
                    <Route path={"/:animal"} element={<Animal/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
