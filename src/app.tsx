import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header";
import Footer from "./components/footer";
import Articles from "./pages/Articles";
import ArticleTemplate from "./pages/article/template";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/articles" Component={Articles} />
        <Route path={`/articles/:slug`} Component={ArticleTemplate} />
      </Routes>
      <Footer />
    </>
  );
}
