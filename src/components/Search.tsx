import { useState } from "react";
import Input from "./BasicComponents/Input";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/context";
import Button from "./BasicComponents/Button";
import { ReactComponent as SearchIcon } from "../images/search.svg";
import { ReactComponent as MicrophoneIcon } from "../images/microphone.svg";

const Search = (props: any) => {
  const { propsMessage } = useContext(MyContext);
  const [userName, setUserName] = useState("");
  const { posts, setPosts,fetchData } = props;

  useEffect(() => {
    console.log(`${propsMessage} Search`);
  }, []);

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleSearch = async () => {
    setPosts(posts.filter((post: any) => post.userName === userName));
    
  };
  return (
    <div className="flex justify-center items-center">
      <Input
        fullWidth
        data-testid="search-input"
        onChange={(e) => handleUserName(e)}
        placeHolder="Enter users name to search for posts"
        inputAdornment={<SearchIcon />}
        endAdornment={<MicrophoneIcon />}
      />
      <Button data-testid="search-button" disabled={!userName} onClick={() => handleSearch()} variant="primary" size="sm">
        Search
      </Button>
      <Button onClick={() => fetchData()} variant="primary" size="sm">
        Reload
      </Button>
    </div>
  );
};
export default Search;
