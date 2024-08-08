/** @format */

import  { useEffect, useRef, useState } from "react";

import { logo } from "../assets";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import BlogCard from "./BlogCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const BlogPage = ({posts}) => {
  const blogSectionRef = useRef(null);
  const blogs = [
    {
      title: "10 Reasons to Hire a Digital Marketing Agency in the UK",
      date: "July 10, 2024",
      imageUrl:
        "https://www.zarvisgenix.com/wp-content/uploads/2023/06/blog-image-1.jpg",
      link: "https://www.zarvisgenix.com/createBlog/2024/07/10/10-reasons-to-hire-a-digital-marketing-agency-in-uk/",
    },
    {
      title: "How to Boost Your Business with Social Media Marketing",
      date: "June 5, 2024",
      imageUrl:
        "https://www.zarvisgenix.com/wp-content/uploads/2023/06/blog-image-2.jpg",
      link: "#",
    },
    {
      title: "Top 5 SEO Tips to Improve Your Website Ranking",
      date: "May 20, 2024",
      imageUrl:
        "https://www.zarvisgenix.com/wp-content/uploads/2023/06/blog-image-3.jpg",
      link: "#",
    },
    {
      title: "The Future of Digital Marketing",
      date: "April 15, 2024",
      imageUrl:
        "https://www.zarvisgenix.com/wp-content/uploads/2023/06/blog-image-4.jpg",
      link: "#",
    },
    {
      title: "How to Build a Strong Online Presence",
      date: "March 10, 2024",
      imageUrl:
        "https://www.zarvisgenix.com/wp-content/uploads/2023/06/blog-image-5.jpg",
      link: "#",
    },
    {
      title: "Understanding the Basics of SEO",
      date: "February 5, 2024",
      imageUrl:
        "https://www.zarvisgenix.com/wp-content/uploads/2023/06/blog-image-6.jpg",
      link: "#",
    },
    {
      title: "Understanding the Basics of SEO",
      date: "February 5, 2024",
      imageUrl:
        "https://www.zarvisgenix.com/wp-content/uploads/2023/06/blog-image-6.jpg",
      link: "#",
    },
    {
      title: "Another Blog Post",
      date: "January 1, 2024",
      imageUrl:
        "https://www.zarvisgenix.com/wp-content/uploads/2023/06/blog-image-7.jpg",
      link: "#",
    },
    {
      title: "Yet Another Blog Post",
      date: "December 25, 2023",
      imageUrl:
        "https://www.zarvisgenix.com/wp-content/uploads/2023/06/blog-image-8.jpg",
      link: "#",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(10, 10);
  };
  useEffect(() => {
    const blogCards = blogSectionRef.current.querySelectorAll(".blog-card");
    console.log("Blog cards found: ", blogCards.length);
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
  }, [currentPosts]);
  return (
    <div className="bg-gray-100 min-h-screen " ref={blogSectionRef}>
      <header className="bg-teal text-white py-2">
        <div className="container mx-auto flex  justify-between items-center px-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <img
              src={logo}
              alt="ConnectPlus Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain mr-2"
            />
            <h1 className="text-white text-[20px] md:text-[25px] font-bold cursor-pointer font-montserrat">
              Connect+
            </h1>
          </div>

          <Link
            to="/"
            id="home"
            className="bg-yellow-400 text-black font-semibold py-2 px-2 md:px-4 rounded hover:bg-yellow-600 transition font-montserrat no-underline"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-2 pb-16">
        <div className="flex items-center py-6 relative">
          <h2 className="text-[25px]  font-bold text-gray-800 tracking-wide font-montserrat">
            Latest Blogs
          </h2>
          <div className="w-full h-2 rounded-md bg-teal ml-2 mt-1"></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {currentPosts.map((blog, index) => (
            <BlogCard
              key={index}
              id={blog.id}
              title={blog.title}
              date={blog.date}
              url={blog.link}
              imageUrl={blog.imageUrl}
            />
          ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts?.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default BlogPage;
