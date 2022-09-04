import Header from "./CardComponents/Header";
import Body from "./CardComponents/Body";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../context/context";

const Comments = (props: { comments: any }) => {
  const { comments,...rest } = props;
  const { propsMessage } = useContext(MyContext);
  useEffect(() => {
    console.log(`${propsMessage} Comment`);
  }, []);
  return (
    <div>
      {comments.map((comment: any, i: any) => {
        return (
          <div key={comment.id} className="m-6 border rounded-md " {...rest}>
            <Header userEmail={comment?.email} />
            <Body
              backgroundColor="lightGrey"
              bodyFontWeight="extralight"
              titleFontsize="text-sm"
              titleFontWeight="semibold"
              title={comment?.name}
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
