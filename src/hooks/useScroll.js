/** Updated from @trujic1000's react-navbar at:
 * https://github.com/trujic1000/react-navbar/blob/master/src/hooks/useScroll.js 
 */

import { useState, useEffect } from "react";

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => {
    const scrollTop = window !== undefined ? window.scrollX : 0;

    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return { isScrolled };
};