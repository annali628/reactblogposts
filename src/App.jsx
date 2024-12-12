// this type of webpage is called a dynamic webpage, where the users create data for it

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes, useParams } from "react-router-dom";

// import into App.jsx from Homepage.jsx
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import CreateBlogPost from "./components/CreateBlogPost";

const SingleBlogPost = ({ blogPosts }) => {
  const { blogPostID } = useParams();

  // .find helps you find a specific item in the array
  const specificBlogPost = blogPosts.find(
    (post) => String(post.id) === blogPostID
  );

  // if you cannot find specific blog post, return like "not found"
  if (!specificBlogPost) {
    return <h1>Not found</h1>;
  }

  // we have a blog post ID
  // you have a blogPosts array
  // find the specific blog post with that ID
  return (
    <div>
      <h1>{specificBlogPost.name}</h1>
      <p>{specificBlogPost.body}</p>
    </div>
  );
};

// root component also known as the parent component

function App() {
  // this is your source of truth for all the blog posts
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      name: "Dummy blog post",
      body: "This is a dummy blog post that I created just for testing purposes",
    },
    {
      id: 2,
      name: "Dummy blog post 2",
      body: "This is a dummy blog post that I created just for testing purposes",
    },
  ]);

  // /:id parameterized rotue... it is a catch all route for anything... a variable route

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage blogPosts={blogPosts} />} />
        <Route path="/:blogPostID" element={<SingleBlogPost />} />
        <Route
          path="/create"
          element={
            <CreateBlogPost setBlogPosts={setBlogPosts} blogPosts={blogPosts} />
            // passed it down as a prop in blogpost
          }
        />
      </Routes>
    </>
  );
}

export default App;
