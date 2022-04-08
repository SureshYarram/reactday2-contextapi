import { Route, Routes } from "react-router";
import { Home } from "./Components/Home";
import { SignUp1 } from "./Components/SignUp1";
import { SignUp2 } from "./Components/SignUp2";
import { Users } from "./Components/Users";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration/one" element={<SignUp1/>}/>
        <Route path="/registration/two" element={<SignUp2/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
