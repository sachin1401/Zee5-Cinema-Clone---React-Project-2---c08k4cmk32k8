import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "../style/watchlist.css";

function AddToWatchlist({ watchlist }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [startIndex, setStartIndex] = useState(0);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(""); // Store the current video URL
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleWatchVideo = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setCurrentVideoUrl("");
    setIsVideoModalOpen(false);
  };

  return (
    <div className="watchlist">
      {watchlist.length > 0 && <h2>Watchlist</h2>}
      <div className="movie-list-wl">
        {watchlist.map((movie) => (
          <div key={uuidv4()} className="movie-card-wl">
            <img
              src={movie.thumbnail}
              alt={movie.title}
              onClick={() => handleWatchVideo(movie.video_url)}
            />
            <h3>{movie.title}</h3>

            {isVideoModalOpen && (
              <div className="video-modal">
                <div className="video-container">
                  <button className="close-button" onClick={handleCloseVideo}>
                    ❌
                  </button>
                  <video controls>
                    <source src={currentVideoUrl} type="video/mp4" />
                  </video>
                  <div className="video-info">
                    <h3>
                      Title: <span>{movie.title}</span>{" "}
                    </h3>
                    <p>
                      Type: <span>{movie.type}</span>{" "}
                    </p>
                    <p>
                      Keywords:<span> {movie.keywords}</span>
                    </p>

                    <p>
                      Cast: <span> {movie.cast}</span>
                    </p>
                    <p>
                      Description: <span> {movie.description}</span>
                    </p>
                    <div className="action-buttons">
                      {/* <button className="share-button">Share</button> */}
                      <button className="watchlist-button">
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
    </div>
  );
}

export default AddToWatchlist;
