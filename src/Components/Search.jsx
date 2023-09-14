import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "../style/Search.css"; // Import your CSS file

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [featuredContent, setFeaturedContent] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [startIndex, setStartIndex] = useState(0);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(""); // Store the current video URL
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    fetchFeaturedContent();
  }, []);

  const fetchFeaturedContent = () => {
    fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=10`, // Update with your API endpoint
      {
        headers: {
          projectId: "f104bi07c490",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFeaturedContent(data.data);
        setFilteredMovies(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSearch = () => {
    if (!searchKeyword) {
      // If the search keyword is empty, show all movies
      setFilteredMovies(featuredContent);
    } else {
      // Filter movies based on the search keyword
      const filtered = featuredContent.filter((movie) =>
        movie.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  const handleWatchVideo = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setCurrentVideoUrl("");
    setIsVideoModalOpen(false);
  };

  return (
    <div className="search-bg-bg">
      <div className="search-section-bg">
        <input
          type="text"
          placeholder="Search for Movies by Title"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="movie-list-bg">
        {filteredMovies.map((movie) => (
          <div key={uuidv4()} className="movie-card-bg">
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
                      <button className="share-button">Share</button>
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
};

export default Search;
