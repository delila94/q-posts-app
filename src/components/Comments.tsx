import Header from "./CardComponents/Header";
import Body from "./CardComponents/Body";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../context/context";
import MainTitle from "./BasicComponents/MainTitle";

const Comments = (props: { comments: any }) => {
  const { comments,...rest } = props;
  const { propsMessage } = useContext(MyContext);
  useEffect(() => {
    console.log(`${propsMessage} Comments`);
  }, []);
  return (
    <div>
      {comments.map((comment: any) => {
        return (
          <div key={comment.id} className="m-6 border rounded-md " {...rest}>
            <Header userEmail={comment?.email} />
            <MainTitle m={4} fontSize="text-base" fontWeight="bold">{comment?.name}</MainTitle>
            <Body
              backgroundColor="lightGrey"
              bodyFontWeight="extralight"
              className="p-4"
            >
              {comment?.body}
            </Body>
          </div>
        );
      })}
    </div>
  );
};
export default Comments;
