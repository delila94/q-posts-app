import Body from "./CardComponents/Body";
import Header from "./CardComponents/Header";
import { useEffect, useState, useContext } from "react";
import Comments from "./Comments";
import withLoading from "../functions/withLoading";
import { MyContext } from "../context/context";
import Footer from "./CardComponents/Footer";
import { IComment } from "../types.posts";
import MainTitle from "./BasicComponents/MainTitle";

const CommentsWithLoading = withLoading(Comments);

const Post = (props: { post: any; link?: string; className?: string }) => {
  const { post, link, className, ...rest } = props;
  const [openComments, setOpenComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<IComment | []>([]);
  const [postId, setPostId] = useState();
  const { getComments, propsMessage } = useContext(MyContext);

  useEffect(() => {
    console.log(`${propsMessage} Post`);
  }, []);
  useEffect(() => {
    if (openComments) {
      getPostComments();
    }
  }, [openComments]);

  const getPostComments = async () => {
    setIsLoading(true);
    const response = await getComments(postId);
    setComments(response);
    setIsLoading(false);
  };

  const handleOpen = (id: any) => {
    setPostId(id);
    setOpenComments(!openComments);
  };

  return (
    <div
      {...rest}
      className={
        `flex items-center justify-center relative border p-2 shadow-md bg-white rounded-lg w-full ` +
        className
      }
    >
      <div className="w-full">
        <span className="absolute rounded-b-lg inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <Header
          userName={post?.userName}
          userEmail={post?.userEmail}
          link={link}
          data-testid="post-header"
        />
        <MainTitle className="m-4" fontSize="text-base" fontWeight="bold">{post.title}</MainTitle>
        <Body className="m-6" data-testid="post-body">
          {post?.body}
        </Body>
        <Footer
         data-testid="post-footer"
          svgImg={
            <svg
              className="mr-1.5 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          }
          onClick={() => handleOpen(post?.id)}
          p={2}
        >
          {post.numberofComments}
        </Footer>

        {openComments ? (
          <CommentsWithLoading
            isLoading={isLoading}
            comments={comments}
            loadingProps={{ width: "w-20", height: "h-20" }}
          />
        ) : null}
      </div>
    </div>
  );
};
export default Post;
