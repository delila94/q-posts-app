import React from "react";
import axios from "axios";
import { IPosts, IComment } from "../types.posts";

const MAIN_URL = "https://jsonplaceholder.typicode.com";
type ContextProps = {
  propsMessage: string;
  getpostsWithUsers: Function;
  getComments: Function;
  getPost: Function;
};
const defaultState = {
  propsMessage: "",
  getpostsWithUsers: Function,
  getComments: Function,
  getPost: Function,
  getPostsFromUser: Function,
};
export const MyContext = React.createContext<ContextProps>(defaultState);

const MyContextProvider = (props: any) => {
  const { children } = props;

  async function getpostsWithUsers(): Promise<[IPosts] | null> {

    try {
      const response = await axios.all([
        axios.get(`${MAIN_URL}/posts/`),
        axios.get(`${MAIN_URL}/users`),
        axios.get(`${MAIN_URL}/comments`),
      ]);
      const [posts, users, comments] = response;
      const data = posts?.data.map((post: any) => {
        const userData = users?.data.find(
          (user: any) => user.id === post.userId
        );
        const postComments = comments?.data.filter(
          (comment: any) => comment.postId === post.id
        );

        return {
          ...post,
          userName: userData?.name,
          userEmail: userData?.email,
          numberofComments: postComments.length,
        };
      });
      return data;
    } catch (err) {
      throw new Error(`Erorr ddd: ${err}`);
    }
  }

  async function getComments(id: any): Promise<[IComment] | null> {
    try {
      const response = await axios.get(`${MAIN_URL}/posts/${id}/comments`);
      if (response?.status !== 200) {
        throw new Error(`HTTP error! status: ${response?.status}`);
      }
      return response?.data;
    } catch (err) {
      throw new Error(`Erorr: ${err}`);
    }
  }

  async function getPost(id: any): Promise<[IPosts] | null> {
    try {

      const response = await axios.get(`${MAIN_URL}/posts/${id}/`);
      if (response?.status !== 200) {
        throw new Error(`HTTP error! status: ${response?.status}`);
      }
      const userData = await axios.get(
        `${MAIN_URL}/users/${response?.data?.userId}/`
      );
      if (userData?.status !== 200) {
        throw new Error(`HTTP error! status: ${response?.status}`);
      }

      return {
        ...response?.data,
        userName: userData?.data?.name,
        userEmail: userData?.data?.email,
      };
    } catch (err) {
      throw new Error(`Erorr: ${err}`);
    }
  }


  return (
    <MyContext.Provider
      value={{
        propsMessage: "Hello from ",
        getPost: getPost,
        getComments: getComments,
        getpostsWithUsers: getpostsWithUsers,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;
