import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
