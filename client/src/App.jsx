import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NewBlog from "./pages/NewBlog";
import BlogDetails from "./pages/BlogDetails";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  const { user } = useAuthContext();
  return (
    <main className="bg-bg-100 screen-height text-text-100 tracking-wider">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/create-blog"
            element={user ? <NewBlog /> : <Navigate to="/login" />}
          />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
