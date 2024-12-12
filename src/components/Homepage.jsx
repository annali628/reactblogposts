import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ blogPosts }) => {
  // console.log(blogPosts);
  // blogPosts is an array of objects
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {blogPosts.map((post) => (
        <div key={post.name}>
          {/* whenever I click on it, it brings me to /${name} */}
          {/* change it to javascript by adding curly brackets in the Link to={} */}
          <Link to={`/${post.id}`}>{post.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
