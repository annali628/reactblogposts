import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlogPost = ({ blogPosts, setBlogPosts }) => {
  const [blogPostName, setBlogPostName] = useState("");
  const [blogPostBody, setBlogPostBody] = useState("");

  // useNavigate is a hook
  // has to start with us
  // can only be used in component bodies
  // cannot be conditionally rendered
  const navigate = useNavigate();

  const createBlogPost = () => {
    console.log(blogPostName, blogPostBody);
    // what is a blog post?
    // what is the data structure for a blog post?
    // it is an object
    // name, body

    // our goal is to put blogPost into the blogPosts array state
    // we have setBlogPosts
    const blogPost = {
      id: blogPosts.length + 1,
      name: blogPostName,
      body: blogPostBody,
    };

    // spreading out exisiting blogPosts and throwing in the new blog post at the end
    setBlogPosts([...blogPosts, blogPost]);

    // when I click create, it auto navigates me back to homepeage
    // navigate is a function that navigates you to any url you want
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 16,
      }}
    >
      <input
        value={blogPostName}
        onChange={(event) => setBlogPostName(event.target.value)}
        placeholder="Name of the blog post"
        style={{ marginBottom: 8 }}
      />
      <textarea
        value={blogPostBody}
        onChange={(event) => setBlogPostBody(event.target.value)}
        rows={20}
        placeholder="Your actual blog post"
        style={{ marginBottom: 8 }}
      />
      <button onClick={createBlogPost}>Create</button>
    </div>
  );
};

export default CreateBlogPost;
