import React, { createContext, useState } from 'react';

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const addNewPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        addNewPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
