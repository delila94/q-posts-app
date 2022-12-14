import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../context/context";
const Body = (props: {
  backgroundColor?: "grey" | "pink" | "lightGrey" | "transparent";
  children?: string;
  bodyFontSize?: "text-sm" | "text-xs" | "text-lg" | "text-xl" | "text-base";
  bodyFontWeight?: "normal" | "bold" | "extrabold" | "black" | "medium" | "light" | "extralight" | "thin" |'semibold';
  p?:Number,
  className?:string;
}) => {
  const {
    children,
    bodyFontSize = "xs",
    backgroundColor = "transparent",
    bodyFontWeight = "normal",
    p=6,
    className='',
    ...rest
  } = props;
  const { propsMessage } = useContext(MyContext);

  useEffect(() => {
    console.log(`${propsMessage} Body`);
  }, []);
  return (
    <div
      className={`p-${p} items-start flex flex-col justify-start ${
        backgroundColor === "grey" && "bg-slate-400"
      } ${backgroundColor === "pink" && "bg-red-500"} ${
        backgroundColor === "lightGrey" && "bg-slate-200"
      } ${backgroundColor === "transparent" && "bg-transparent "} `+ className}
      {...rest}
    >
      <div
        className={`text-${bodyFontSize} font-${bodyFontWeight} text-neutral-600 items-start flex justify-start`}
      >
        {children}
      </div>
    </div>
  );
};
export default Body;
