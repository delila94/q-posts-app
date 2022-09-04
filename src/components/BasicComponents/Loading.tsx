import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";
const Loading = (props: { height?: String; width?: String, }) => {
  const { propsMessage } = useContext(MyContext);
  const { height = "h-36", width = "w-36" } = props;
  useEffect(() => {
    console.log(`${propsMessage} Loading`);
  }, []);
  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div
        className={`border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 ${height} ${width}`}
      ></div>
    </div>
  );
};
export default Loading;
