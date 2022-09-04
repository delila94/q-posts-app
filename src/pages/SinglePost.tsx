import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import withLoading from "../functions/withLoading";
import { MyContext } from "../context/context";

const PostWithLoading = withLoading(Post);

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { getPost, propsMessage } = useContext(MyContext);
  const fetchData = async () => {
    setIsLoading(true);
    const response = await getPost(id);
    setPost(response);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
    console.log(`${propsMessage} SinglePost`);
  }, []);
  return <PostWithLoading isLoading={isLoading} post={post} />;
};
export default SinglePost;
