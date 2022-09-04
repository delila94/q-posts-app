import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../context/context";
import { ReactComponent as NewWindow } from "../../images/newWindow.svg";
import { Link } from "react-router-dom";

const Header = (props: {
  className?: string;
  p?: Number;
  svgImg?: React.ReactNode;
  userName?: string;
  userEmail?: string;
  userNameFontSize?: string;
  userEmailFontSize?: string;
  link?: string;
}) => {
  const {
    userName,
    userEmail,
    p = 2,
    userEmailFontSize = "text-xs",
    userNameFontSize = "text-lg",
    link = "",
    className="",
    ...rest
  } = props;
  const { propsMessage } = useContext(MyContext);
  useEffect(() => {
    console.log(`${propsMessage} Header`);
  }, []);
  return (
    <div  {...rest} className={`flex w-full items-center justify-between border-b p-${p} `+className}>
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-slate-400 text-white flex justify-center items-center ">
        </div>
        <div className="items-start flex flex-col justify-start">
          <div className={`${userNameFontSize} font-bold text-slate-700`}>
            {userName}
          </div>
          <div className={`${userEmailFontSize} font-medium text-slate-500`}>
            {userEmail}
          </div>
        </div>
      </div>
      <div>
        {link ? (
          <div className="cursor-pointer text-gray-700">
          <Link target="_blank" to={link}>
            <NewWindow />
          </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Header;
