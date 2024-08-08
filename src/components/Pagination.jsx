/** @format */

import React from "react";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-8">
      <ul className="flex justify-center">
        {currentPage > 1 && (
          <li className="mx-1 list-none">
            <button
              onClick={() => paginate(currentPage - 1)}
              className="px-3 py-2 bg-[#38B2AC] text-white rounded hover:bg-[#319795] transition"
            >
              Previous
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="mx-1 list-none">
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 ${
                number === currentPage
                  ? "bg-[#2C7A7B] text-white"
                  : "bg-[#38B2AC] text-white hover:bg-[#319795]"
              } rounded transition`}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li className="mx-1 list-none">
            <button
              onClick={() => paginate(currentPage + 1)}
              className="px-3 py-2 bg-[#38B2AC] text-white rounded hover:bg-[#319795] transition"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
