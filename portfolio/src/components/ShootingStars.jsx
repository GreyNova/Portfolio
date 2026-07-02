import React, { useEffect, useState } from "react";
import "../shooting-stars.css";

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate some random starting positions for shooting stars
    const generateStars = () => {
      const newStars = [];
      const numStars = 9; // Number of stars
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 120 - 20 + "%", // From -20% to 100%
          left: Math.random() * 120 + "%", // From 0% to 120%
          delay: (Math.random() * 8).toFixed(2) + "s", // Random delay between 0 and 8s
          duration: (Math.random() * 5 + 1.5).toFixed(2) + "s", // Random duration between 1.5s and 6.5s
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShootingStars;
