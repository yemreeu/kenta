import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./context/UserContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AskUsPage from "./pages/AskUsPage/AskUsPage";
import PorfolioPage from "./pages/PorfolioPage/PorfolioPage";



function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/blog" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ask" element={<AskUsPage />} />
            <Route path="/portfolio" element={<PorfolioPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
