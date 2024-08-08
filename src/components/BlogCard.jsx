/** @format */

import blog from "../assets/blog.png";
import { Link } from "react-router-dom";
const BlogCard = ({
  title,
  date,
  url = "https://via.placeholder.com/400x200",
  imageUrl,
  id,
}) => {
  console.log("img", imageUrl);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div
      //   key={index}
      className="blog-card bg-yellow-400 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
    >
      <img src={imageUrl} alt={title} className="w-full h-60  object-center " />
      <div className="p-6">
        <p className="text-sm text-gray-600 font-montserrat">
          {formatDate(date)}
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-2 mb-4 font-montserrat">
          {title}
        </h3>
        <a
          // to={`/blog/${id}`}
          href={url}
          className="text-green-500 font-semibold hover:underline font-montserrat"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
