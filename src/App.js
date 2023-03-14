import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchItem from "./components/searchItem/SearchItem";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Pricing from "./pages/pricing/Pricing";
import SignInSide from "./pages/SignIn/SignInSide";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/travelworld/signin" element={<SignInSide/>}/>
        <Route path="/travelworld/signup" element={<SignUp/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;