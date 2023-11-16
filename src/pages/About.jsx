import React from 'react'

function About() {
  return (
    <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-12">About</h2>
        <h2 className="font-bold text-2xl text-gray-400 text-left mt-4 mb-8">Key Features:</h2>
        <div className="flex flex-col text-white ml-6"> 
          <h1 className="font-bold text-xl pb-5">Overview:</h1>
          <p className="pb-12">vSpotify Clone is a cutting-edge music streaming web application that offers a unique and interactive experience for music lovers. This web app stands out with its third-party backend integration, extensive API library, and visually appealing user interface.</p>
          
          <ul className="font-bold text-xl pb-5">Third-Party Backend Integration:</ul>
          <li className="">Integrates GeoApify API to ascertain the user’s current location.
Presents tailored song recommendations on the “Around You Page” based on the user’s geographical position.</li>
          <li className="pb-12">Leverages the Shazam Core API for accessing a wide range of music and related data. Features a snippet playback of top tracks, with each song playing for 1:30 minutes.</li>

          <h1 className="font-bold text-xl pb-5">Engaging User Interface with Swiper:</h1>
          <p className="pb-12"></p>

    
        </div>
    </div>
  )
}

export default About
