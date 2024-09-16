import React, { useEffect, useState, useRef } from 'react';
import '../styles/Carousel.css'; // For the styles

interface CarouselProps {
  slides: any[];
}

const CustomCarousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const playerRefs = useRef<(YT.Player | null)[]>([]); // Store YouTube Player instances

  // Load the YouTube IFrame API
  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }
    };
    loadYouTubeAPI();
  }, []);

  // Initialize YouTube players after the iframe API is ready
  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      slides.forEach((slide, index) => {
        const iframeId = `player-${slide.id.videoId}`;
        if (!playerRefs.current[index] && window.YT && document.getElementById(iframeId)) {
          playerRefs.current[index] = new window.YT.Player(iframeId, {
            events: {
              onReady: () => {
                console.log(`Player ${slide.id.videoId} is ready`);
              },
            },
          });
        }
      });
    };

    // Attach the callback to the global window object
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    // Initialize players when YT is available
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    }
  }, [slides]);

  // Navigate to previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      pauseCurrentVideo(); // Pause the current video before sliding
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
        setIsTransitioning(false);
      }, 500); // Match the CSS transition duration
    }
  };

  // Navigate to next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      pauseCurrentVideo(); // Pause the current video before sliding
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500); // Match the CSS transition duration
    }
  };

  // Pause the current playing video
  const pauseCurrentVideo = () => {
    const currentVideoPlayer = playerRefs.current[currentIndex];
    if (currentVideoPlayer && currentVideoPlayer.pauseVideo) {
      currentVideoPlayer.pauseVideo();
    }
  };

  return (
    <div className="carousel-container">
      {/* Previous Slide Button */}
      <button onClick={prevSlide} className="arrow-button">
        <i className="arrow left"></i>
      </button>

      {/* Carousel Wrapper */}
      <div className="carousel-wrapper">
        <div
          className={`carousel-content ${isTransitioning ? 'transition' : ''}`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {/* Loop over the slides */}
          {slides.map((slide, index) => (
            <div className="carousel-slide" key={index}>
              <iframe
                id={`player-${slide.id.videoId}`} // Unique ID for each iframe
                width="315"
                height="560"
                src={`https://www.youtube.com/embed/${slide.id.videoId}?enablejsapi=1`} // Enable JS API for control
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* Next Slide Button */}
      <button onClick={nextSlide} className="arrow-button">
        <i className="arrow right"></i>
      </button>
    </div>
  );
};

export default CustomCarousel;
