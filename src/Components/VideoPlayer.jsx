import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ currentPage }) => {
  const [featuredContent, setFeaturedContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchFeaturedContent();
  }, [currentPage]);

  const fetchFeaturedContent = () => {
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
        setCurrentIndex(0); // Reset index when fetching new content
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleVideoEnd = () => {
    // Play the next video when the current video ends
    if (currentIndex < featuredContent.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      {featuredContent.length > 0 && (
        <ReactPlayer
          url={featuredContent[currentIndex].video_url} // Replace with the actual key containing video URLs
          controls={true}
          width="100%"
          height="auto"
          onEnded={handleVideoEnd}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
