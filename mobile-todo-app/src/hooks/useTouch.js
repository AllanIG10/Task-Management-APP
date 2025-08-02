import { useState } from 'react';

export const useTouch = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const swipeThreshold = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (callback) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > swipeThreshold;
    const isRightSwipe = distance < -swipeThreshold;

    if (callback) {
      callback({ isLeftSwipe, isRightSwipe, distance });
    }
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
};