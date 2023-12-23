import React from "react";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32 lg:px-40" id="about">
      <div className="container mx-auto grid lg:grid-cols-2 items-center justify-center lg:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, I'm Rohima Akther, but everyone calls me Amrin. I'm a Frontend
            Developer, and I love building beautiful websites using
            React/Next.js and Tailwind CSS. I'm good at things like React.js,
            Redux, Redux Toolkit, Axios, Tailwind CSS, SaSS, CSS3, and more for
            the frontend.
            <br />
            <br />
            On the backend, I work with Node.js, Express.js, MongoDB, and
            Mongoose.
          </p>

          <p>
            Outside of work, I make YouTube videos and write blogs where I talk
            about programming concepts and share different projects I've worked
            on.
          </p>
        </div>

        <div className="about-img hidden lg:block">
          <img
            src={"/images/about-img.png"}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
