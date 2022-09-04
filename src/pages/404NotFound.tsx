import { useEffect, useContext } from "react";
import { MyContext } from "../context/context";
import MainTitle from "../components/BasicComponents/MainTitle";

const NotFound = () => {
  const { propsMessage } = useContext(MyContext);
  useEffect(() => {
    console.log(`${propsMessage} NotFound`);
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <MainTitle fontSize="text-5xl">PAGE NOT FOUND</MainTitle>
    </div>
  );
};
export default NotFound;
