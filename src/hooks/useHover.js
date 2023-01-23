import { useState } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const isHovered = () => hovered;
  const ToggleHovered = () => setHovered((prevHovered) => !prevHovered);

  return {isHovered, ToggleHovered};
};

export default useHover;
