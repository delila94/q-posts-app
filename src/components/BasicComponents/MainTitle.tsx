import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../context/context";

const MainTitle = (props: {
  children?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  m?: Number;
  fontSize?:string;
  fontWeight?: "normal" | "bold" | "extrabold" | "black" | "medium" | "light" | "extralight" | "thin" |'semibold';
  color?:string,
  otherProps?:any;
}) => {
  const { m=2, fontSize="text-2xl", fontWeight="bold",children ,className='',color="text-black",...otherProps} = props;
  const { propsMessage } = useContext(MyContext);
  useEffect(() => {
    console.log(`${propsMessage} MainTitle`);
  }, []);
  return (
    <div {...otherProps} data-testid="title" className={`${fontSize} m-${m} flex justify-center font-${fontWeight} ${color} `+className}>{children}</div>
  );
};
export default MainTitle;
