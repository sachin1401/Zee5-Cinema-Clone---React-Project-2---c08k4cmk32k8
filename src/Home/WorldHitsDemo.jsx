import React, { useState, useEffect } from "react";
import "../style/TrendingDemo.css";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddToWatchlist from "../Components/AddToWatchlist";
import { Link } from "react-router-dom";

function WorldHitsDemo() {
  const [featuredContent, setFeaturedContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(15);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage] = useState(8);
  const [startIndex, setStartIndex] = useState(0);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const loggedInUser = localStorage.getItem("loggedInUser");

  useEffect(() => {
    fetchFeaturedContent();
  }, [currentPage]);

  const fetchFeaturedContent = () => {
    fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?page=${currentPage}&limit=100`,
      {
        headers: {
          projectId: "f104bi07c490",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFeaturedContent(data.data);
        setCurrentIndex(0); // Reset index when fetching new content
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const addToWatchlist = (item) => {
    setWatchlist([...watchlist, item]);
  };

  const handleWatchVideo = (videoUrl, item) => {
    setCurrentVideoUrl(videoUrl);
    setSelectedVideo(item); // Set the selected video item
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setCurrentVideoUrl("");
    setSelectedVideo(null); // Clear the selected video item
    setIsVideoModalOpen(false);
  };

  const moveToPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    } else if (currentPage > 1) {
      // Load previous page of content
      setCurrentPage(currentPage - 1);
    }
  };

  const moveToNext = () => {
    if (startIndex + itemsPerPage < featuredContent.length) {
      setStartIndex(startIndex + itemsPerPage);
    } else {
      // Load more content if available
      if (featuredContent.length === itemsPerPage * currentPage) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  return (
    <div className="home-trending-section">
      <h2>World Hits For You</h2>
      <div className="home-card-container">
        <button className="home-nav-button home-prev" onClick={moveToPrevious}>
          &#8249;
        </button>
        <div className="home-cards">
          {featuredContent
            .slice(startIndex, startIndex + itemsPerPage)
            .map((item, index) => (
              <div key={uuidv4()} className="home-card">
                <div className="home-card-image">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="home-card-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>
                    {loggedInUser ? (
                      <Button
                        className="watch-button"
                        variant="outlined"
                        color="primary"
                        onClick={() => handleWatchVideo(item.video_url, item)}
                      >
                        <PlayArrowIcon />
                        Watch
                      </Button>
                    ) : (
                      <Link to="/login">
                        <Button
                          className="watch-button"
                          variant="outlined"
                          color="primary"
                        >
                          <PlayArrowIcon />
                          Watch
                        </Button>
                      </Link>
                    )}
                  </p>
                </div>
                {isVideoModalOpen && selectedVideo && (
                  <div className="video-modal">
                    <div className="video-container">
                      <button
                        className="close-button"
                        onClick={handleCloseVideo}
                      >
                        ❌close
                      </button>
                      <video controls>
                        <source src={currentVideoUrl} type="video/mp4" />
                      </video>
                      <div className="video-info">
                        <h3>
                          Title: <span>{selectedVideo.title}</span>{" "}
                        </h3>
                        <p>
                          Type: <span>{selectedVideo.type}</span>{" "}
                        </p>
                        <p>
                          Keywords:<span> {selectedVideo.keywords}</span>
                        </p>
                        <p>
                          Cast: <span> {selectedVideo.cast}</span>
                        </p>
                        <p>
                          Description: <span> {selectedVideo.description}</span>
                        </p>
                        <div className="action-buttons">
                          {/* <button className="share-button">Share</button> */}
                          <button
                            className="watchlist-button"
                            onClick={() => addToWatchlist(selectedVideo)}
                          >
                            Add to Watchlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
        <button className="home-nav-button home-next" onClick={moveToNext}>
          &#8250;
        </button>
      </div>
      <AddToWatchlist watchlist={watchlist} />
    </div>
  );
}

export default WorldHitsDemo;
