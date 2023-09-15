import "./App.css";
import Navbar from "./Components/Navbar";
import UserRegistration from "./Components/UserRegistration";
import UnderConstruction from "./Components/UnderConstruction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageSlider from "./Components/ImageSlider";
import Buyplan from "./Payment/BuyPlan";
import Login from "./Login/Login";
import Home from "./Components/Home";
import Payment from "./Payment/Payment";
import PaymentStatus from "./Payment/PayementStatus";
import Register from "./Login/Register";
import Search from "./Components/Search";
import AddToWatchlist from "./Components/AddToWatchlist";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* SET all routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/buy-plan" element={<Buyplan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buy-plan/payment" element={<Payment />} />
          <Route path="/buy-plan/payment-status" element={<PaymentStatus />} />
          <Route path="/login/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/add-to-watchlist" element={<AddToWatchlist />} /> */}
          <Route
            exact
            path="/under-construction"
            element={<UnderConstruction />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
