/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../utils/blogApi";

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const postData = await fetchPostById(id);
      setPost(postData);
    };
    getPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
      {/* Add comments and other features here */}
    </div>
  );
};

export default BlogDetails;
