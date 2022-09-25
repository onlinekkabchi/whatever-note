import "./style/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./component/collection";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Collection />} />
                    {/* <Route path="/:id" element={}/> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
