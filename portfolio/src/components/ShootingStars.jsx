import React, { useEffect, useState } from "react";
import "../shooting-stars.css";

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate some random starting positions for shooting stars
    const generateStars = () => {
      const newStars = [];
      const delays = [0, 1.3, 2.6];
      for (let i = 0; i < 3; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 40 + "%",
          left: Math.random() * 50 + 50 + "%",
          delay: delays[i] + "s",
          duration: "4s",
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
