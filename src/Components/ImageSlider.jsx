import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import "../style/ImageSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReactPlayer from "react-player";

const ImageSlider = () => {
  const [currentPage, setCurrentPage] = useState(14);
  const [featuredContent, setFeaturedContent] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null); // Define currentVideo here
  const [videoPlaying, setVideoPlaying] = useState(false);

  const playVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setVideoPlaying(true);
  };

  const closeVideo = () => {
    setCurrentVideo(null);
    setVideoPlaying(false);
  };

  const setting = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?page=${currentPage}&limit=10`,
      {
        headers: {
          projectId: "f104bi07c490",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFeaturedContent(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  return (
    <div className="navSliderContainer">
      <div
        className="image-slider"
        style={{ width: "80%", margin: "auto", marginTop: "85px" }}
      >
        <Slider {...setting}>
          {featuredContent.map((item) => (
            <div key={uuidv4()} className="carousel-item">
              <img
                className="slider-img"
                src={item.thumbnail}
                alt={item.title}
              />
              <div className="button-overlay">
                {item.title}
                <br />
                <Button
                  className="watch-button"
                  variant="contained"
                  color="primary"
                  onClick={() => playVideo(item.video_url)}
                >
                  <PlayArrowIcon />
                  Watch
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {currentVideo && (
        <div className="video-modal">
          <ReactPlayer
            url={currentVideo}
            playing={videoPlaying}
            controls
            width="100%"
            height="100%"
            onPause={closeVideo}
            onEnded={closeVideo}
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
