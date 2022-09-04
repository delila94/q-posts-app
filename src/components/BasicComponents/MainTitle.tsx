import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../context/context";

const MainTitle = (props: {
  children?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  m?: Number;
  fontSize?:string;
  fontWeight?:string;
  color?:string,
  otherProps?:any;
}) => {
  const { m=2, fontSize="text-2xl", fontWeight="font-bold",children ,className,color="text-black",...otherProps} = props;
  const { propsMessage } = useContext(MyContext);
  useEffect(() => {
    console.log(`${propsMessage} MainTitle`);
  }, []);
  return (
    <div {...otherProps} data-testid="title" className={`${fontSize} m-${m} flex justify-center ${fontWeight} ${color}`+className}>{children}</div>
  );
};
export default MainTitle;
