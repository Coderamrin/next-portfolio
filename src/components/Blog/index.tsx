"use client";
import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=coderamrin")
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 3)))
      .catch((error) => console.log(error.message));
  });

  return (
    <section className="bg-primary text-white px-5 py-32 lg:px-40" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[222px] border-indigo-600 pb-2">
            Latest Posts
          </h2>

          <p className="pb-5">Read the latest blogs and learn more!</p>
        </div>

        <div></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {blogs.map((item: any) => {
          return (
            <div>
              <img src={item.cover_image} alt={item.title} />
              <h3 className="py-5 text-2xl font-medium">{item.title.slice(0, 50)}...</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-accent text-white px-6 py-3 hover:bg-transparent rounded-md duration-500 hover:text-accent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
