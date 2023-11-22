import React from "react";
import about from "../assets/images/about.avif";

const About = () => {
  return (
    <section className="bg-white mt-10">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-gray-900 sm:text-2xl">About Us</h2>
            <p className="mt-4 text-gray-600 text-md font-light">
              Welcome to our platform, the premier destination for all things
              automotive in Germany! we are passionate about bringing car
              enthusiasts, industry professionals, and curious visitors together
              in one comprehensive platform. Our mission is to aggregate and
              showcase all the exciting car exhibitions happening across
              Germany, providing a centralized hub for information, updates, and
              insights into the vibrant automotive scene. Whether you're an avid
              car lover looking for the latest shows, a business seeking
              exposure at renowned events, or simply curious about upcoming
              exhibitions near you, our platform is your go-to resource. Join us
              on the journey of exploring, celebrating, and connecting with the
              exciting world of car exhibitions in Germany!
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={about}
              alt="About Us"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
