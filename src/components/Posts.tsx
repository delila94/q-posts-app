import Post from "./Post";
import { MyContext } from "../context/context";
import { useContext, useEffect } from "react";
import MainTitle from "./BasicComponents/MainTitle";

const Posts = (props: { posts: any }) => {
  const { posts } = props;
  const { propsMessage } = useContext(MyContext);
  useEffect(() => {
    console.log(`${propsMessage} Posts`);
  }, []);
  return (
    <div>
      {posts?.length > 0 ? (
        <div className="mt-3">
          {posts.map((post: any) => {
            return (
              <div key={post?.id} data-testid="post-card">
                <Post data-testid="card" post={post} link={`/post/${post.id}`} className="my-4" />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center w-full">
          <MainTitle>No posts Found</MainTitle>
        </div>
      )}
    </div>
  );
};
export default Posts;
