import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(null);

  const isHovered = () => hovered;

  const toggleHovered = () => setHovered(prevHovered => !prevHovered);

  useEffect(() => {
    hoveredRef.current.addEventListener("mouseenter", toggleHovered);
    hoveredRef.current.addEventListener("mouseleave", toggleHovered);

    // return () => {
    //   hoveredRef.current.removeEventListener("mouseenter", toggleHovered);
    //   hoveredRef.current.removeEventListener("mouseleave", toggleHovered);
    // };
  }, []);

  return { isHovered, hoveredRef };
};

export default useHover;
