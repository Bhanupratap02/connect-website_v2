/** @format */

import { useLayoutEffect, useRef, useState } from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const BlogSection = ({ posts }) => {
  const blogSectionRef = useRef(null);
  const displayedBlogs = posts?.slice(0, 3);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "10 Reasons to Hire a Digital Marketing Agency in the UK",
      date: "July 10, 2024",
      url: "#",
      imageUrl: "https://via.placeholder.com/400x200", // Placeholder image
    },
    {
      id: 2,
      title: "How to Boost Your Business with Social Media Marketing",
      date: "June 5, 2024",
      url: "#",
      imageUrl: "https://via.placeholder.com/400x200", // Placeholder image
    },
    {
      id: 3,
      title: "Top 5 SEO Tips to Improve Your Website Ranking",
      date: "May 20, 2024",
      url: "#",
      imageUrl: "https://via.placeholder.com/400x200", // Placeholder image
    },
  ]);

  useLayoutEffect(() => {
    if (blogSectionRef.current) {
      const blogCards = blogSectionRef.current.querySelectorAll(".blog-card");
      gsap.fromTo(
        blogCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: blogSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [displayedBlogs]);
  return (
    <section
      id="blogs"
      className=" py-6 mb-10 bg-gray-100"
      ref={blogSectionRef}
    >
      <div className="container mx-auto max-sm:px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-black font-montserrat">
            Latest Blogs
          </h2>
          <a
            href="https://connectplus.org.uk/wp/"
            // to="/blogs"
            className="text-green-600 font-semibold hover:underline text-[18px] md:text-[20px] font-montserrat"
          >
            All Blogs
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              date={blog.date}
              url={blog.link}
              imageUrl={blog.imageUrl}
              //   className="blog-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
