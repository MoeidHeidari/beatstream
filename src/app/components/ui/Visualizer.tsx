'use client';

import React, { useState, useEffect, useRef } from 'react';

const Visualizer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [heights, setHeights] = useState<number[]>(Array(32).fill(10)); // Deterministic initial heights
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize random heights after hydration
  useEffect(() => {
    const randomHeights = Array(32)
      .fill(0)
      .map((_, i) => 10 + Math.random() * (i % 4 === 0 ? 60 : 40));
    setHeights(randomHeights);
  }, []);

  // Function to update the heights with more dramatic movements
  const updateHeights = () => {
    setHeights((prevHeights) =>
      prevHeights.map((prevHeight, i) => {
        const maxChange = i % 4 === 0 ? 20 : 10; // Larger movements for every 4th bar
        const delta = Math.random() * maxChange - maxChange / 2; // Randomize the height change
        return Math.min(Math.max(prevHeight + delta, 5), 100); // Keep within bounds (5% to 100%)
      })
    );
  };

  // Start animation on hover
  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(updateHeights, 120); // Update every 120ms for smoother but more dynamic animation
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear interval when hover ends
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <div
      className="mx-auto h-16 w-[600px] max-w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-full w-full justify-between gap-1">
        {heights.map((height, i) => (
          <div
            key={i}
            className="w-1 bg-white transition-transform duration-300 ease-in-out"
            style={{
              height: `${height}%`, // Use heights state for bar height
              transformOrigin: 'top',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Visualizer;