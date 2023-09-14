// Home.jsx
import React from "react";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import HindiEpisode from "../Home/HindiEpisode";
import TrendingDemo from "../Home//TrendingDemo";
import TopMovieDemo from "../Home//TopMovieDemo";
import BollywoodDemo from "../Home//BollywoodDemo";
import PopularDramaDemo from "../Home//PopularDramaDemo";
import WorldHitsDemo from "../Home//WorldHitsDemo";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Image Slider  */}
      {/* <VideoProvider> */}
      <ImageSlider />
      {/* </VideoProvider> */}

      {/* trending Section  */}
      <TrendingDemo />

      {/* Top movie section */}
      <TopMovieDemo />

      {/* hindi episode */}
      <HindiEpisode />

      {/* worlds hit section */}
      <WorldHitsDemo />

      {/* Bollywood blockbuster */}
      <BollywoodDemo />

      {/* popular dramas */}
      <PopularDramaDemo />

      {/* content details */}
      {/* <ContentDetails contentId={contentId} apiKey={apiKey} /> */}

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
