import { useEffect, useState } from "react";

type ScrollDirection = "NA" | "UP" | "DOWN";

const useScrollDirection = (target?: HTMLElement | null): ScrollDirection => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>("NA");
  const scrollTarget = target ?? window;

  useEffect(() => {
    const threshold = 1;
    let lastScrollY = target ? target.scrollTop : window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = target ? target.scrollTop : window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "DOWN" : "UP");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    scrollTarget.addEventListener("scroll", onScroll);

    return () => scrollTarget.removeEventListener("scroll", onScroll);
  }, [scrollDir, scrollTarget, target]);

  return scrollDir;
};

export default useScrollDirection;
