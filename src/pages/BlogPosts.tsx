import { useState } from "react";
import { useEffect, useContext } from "react";
import AllPosts from "../components/Posts";
import withLoading from "../functions/withLoading";
import { MyContext } from "../context/context";
import Search from "../components/Search";
import { IPosts } from ".././types.posts";

const AllPostsWithLoading = withLoading(AllPosts);
const BlogPosts = () => {
  const [posts, setPosts] = useState<IPosts[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getpostsWithUsers, propsMessage } = useContext(MyContext);
  const fetchData = async () => {
    setIsLoading(true);
    const response = await getpostsWithUsers();
    console.log("posts", response);
    setPosts(response);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
    console.log(`${propsMessage} BlogPosts`);
  }, []);

  return (
    <>
      <Search posts={posts} setPosts={setPosts} fetchData={fetchData} />
      <AllPostsWithLoading isLoading={isLoading} posts={posts} />
    </>
  );
};
export default BlogPosts;
