import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../context/context";
const Footer = (props: {
  children?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  p?: Number;
  svgImg?: React.ReactNode;
  backgroundColor?: string;
}) => {
  const {
    onClick = () => {},
    children,
    p = 6,
    className = "",
    svgImg,
    backgroundColor = "bg-transparent",
    ...rest
  } = props;

  const { propsMessage } = useContext(MyContext);

  useEffect(() => {
    console.log(`${propsMessage} Footer`);
  }, []);
  return (
    <div
      className={
        `flex p-${p} items-center ${backgroundColor} justify-between text-slate-500 ` +
        className
      }
      {...rest}
    >
      <div className="flex space-x-4 md:space-x-8">
        <div
          onClick={onClick}
          className="flex cursor-pointer items-center transition hover:text-slate-600"
        >
          {svgImg}
          <span data-testid="comments-count">{children}</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
