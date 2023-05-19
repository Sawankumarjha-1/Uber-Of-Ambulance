import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import Login from "./pages/Login";

import TodayNews from "./pages/TodayNews";
import Blogs from "./pages/Blogs";
import ViewIndividualBlog from "./pages/ViewIndividualBlog";
import PharmacutiesPage from "./pages/PharmacutiesPage";
import ProductList from "./pages/ProductList";
import DoctorListing from "./pages/DoctorListing";
import AmbulancePage from "./pages/AmbulancePage";

import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <Navbar id="navbar" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today_health_news" element={<TodayNews />} />
        <Route path="/our_blogs" element={<Blogs />} />
        <Route path="/read_more_blogs" element={<ViewIndividualBlog />} />
        <Route path="/pharmacuties" element={<PharmacutiesPage />} />
        <Route path="/medicne_category" element={<ProductList />} />
        <Route path="/find_doctor" element={<DoctorListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ambulance_service" element={<AmbulancePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
