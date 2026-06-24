import React from "react";
import Navbar from "../components/Navbar";
import Traveller1 from "../pictures/Traveller1.png";
import Decore from "../pictures/Decore.png";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        
        <div
          className="absolute top-0 right-0 w-[50%] h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${Decore})`,
          }}
        ></div>

        <Navbar />

        <div className="relative z-10 flex w-full min-h-screen">
         
          <div className="w-1/2 flex flex-col gap-6 justify-center pl-20 bg-white">
            <p className="text-[#DF6951] font-bold">
              Best Destinations around the world
            </p>

            <h1 className="text-7xl font-serif font-bold text-gray-800">
              Travel, enjoy and live a new and full life
            </h1>

            <p className="max-w-lg text-gray-600">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening.
            </p>

            <div className="flex gap-6">
              <button className="bg-yellow-500 py-2 px-4 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-yellow-600 transition duration-300">
                Find Out More
              </button>

              <button className="bg-gray-800 py-2 px-4 rounded-md text-white font-semibold cursor-pointer border-2 border-gray-800 hover:border-yellow-500 hover:shadow-2xl  shadow-yellow-500 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center">
            <img
              src={Traveller1}
              alt="Traveler"
              className="w-[70%] object-contain"
            />
          </div>
        </div>
      </div>

   
      <section
        id="categories"
        className="w-full min-h-screen flex flex-col items-center justify-center"
      >
        <p className="font-medium">Categories</p>

        <h1 className="text-3xl font-bold mt-2">
          We Offer Best Services
        </h1>

        <div className="flex flex-wrap gap-6 mt-10 justify-center">
          <Card
            title="Beach Paradise"
            description="Experience the ultimate beach getaway."
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          />

          <Card
            title="Mountain Adventure"
            description="Embark on an unforgettable mountain adventure."
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          />

          <Card
            title="City Lights"
            description="Discover the vibrant energy of city life."
            image="https://images.unsplash.com/photo-1494526585095-c41746248156"
          />

          <Card
            title="Desert Safari"
            description="Experience the thrill of a desert safari."
            image="https://images.unsplash.com/photo-1500534623283-312aade485b7"
          />
        </div>
      </section>

      <section
        id="about"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-[#fff1da] gap-5">
        <p className="font-medium text-2xl bg-yellow-500 text-gray-800 py-2 px-4 rounded-md">
          About Us
        </p>
        <h1 className="text-3xl font-bold mt-2">
          We are committed to providing the best travel experiences.
        </h1>
        <p className="max-w-lg text-center text-gray-600 mt-4">
          Our team of travel experts is dedicated to helping you find the perfect destination and create unforgettable memories. Whether you're looking for a relaxing beach vacation, an adventurous mountain trek, or a vibrant city escape, we have something for everyone.
        </p>
      </section>

      <section id="contact" className="w-[100%] min-h-screen flex items-center justify-center gap-5">
       <div className="w-[50%] bg-white p-10 rounded-lg flex flex-col items-center gap-5">
          <p className="font-medium text-2xl bg-yellow-500 text-gray-800 py-2 px-4 rounded-md">
            Contact Us
          </p>
          <h1 className="text-3xl font-bold mt-2">
            Get in Touch with Us
          </h1>
          <p className="max-w-lg text-center text-gray-600 mt-4">
            Have questions or need assistance? Our team is here to help! Reach out to us via email, phone, or our contact form, and we'll get back to you as soon as possible.
          </p>
          <h2 className="text-2xl font-bold">Email</h2>
          <p className="text-gray-600">
            muqsit816@gmail.com
          </p>
        </div>
        <div className="w-[50%] p-10 rounded-lg flex flex-col items-center gap-5">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Contact" className="w-full h-auto rounded-lg" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;