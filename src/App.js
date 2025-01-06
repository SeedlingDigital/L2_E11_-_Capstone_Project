import './App.css';
import LoginPage from "./pages/UserAuth/LoginPage";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import CartPage from "./pages/Cart/CartPage";

function App() {
  return (
      <div>
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<LoginPage/>}/>
            <Route exact path="/landing" element={<LandingPage/>}/>
            <Route exact path="/cart" element={<CartPage/>}/>
          </Routes>
        </header>
      </div>
  );
}

export default App;
