import { Routes, Route, Navigate } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import BlogPosts from "./pages/BlogPosts";
import MyContextProvider from "./context/context";
import withContainer from "./functions/withContainer";
import {BrowserRouter} from "react-router-dom";
import NotFound from "./pages/404NotFound";

const BlogPostsWithContainer = withContainer(BlogPosts);
const SinglePostWithContainer = withContainer(SinglePost);

function App() {
  return (
    <BrowserRouter>
    <MyContextProvider>
      <Routes>
      <Route path="/" element={<Navigate replace to="/posts" />} />
        <Route
          path="/posts"
          element={<BlogPostsWithContainer title={"List of all posts"} />}
        />
        <Route
          path="/notfound"
          element={<NotFound/>}
        />
        <Route
          path="/post/:id"
          element={<SinglePostWithContainer title={"Single Post"} />}
        />
         <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </MyContextProvider>
    </BrowserRouter>
  );
}

export default App;
