import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (targetElement?: Element | null): boolean => {
  const [isElementInViewport, setIsElementInViewport] = useState(false);
  const intersectionObserver = useRef<IntersectionObserver>();

  if (!intersectionObserver.current) {
    intersectionObserver.current = new IntersectionObserver((entries) => {
      // A number > 0 means element is in view port
      if (entries[0].intersectionRatio > 0) {
        setIsElementInViewport(true);
      }
    });
  }

  useEffect(() => {
    if (intersectionObserver.current && targetElement) {
      intersectionObserver.current.observe(targetElement);
    }
  }, [targetElement]);

  // Cleanup observer
  useEffect(() => () => intersectionObserver.current?.disconnect(), []);

  return isElementInViewport;
};

export default useIntersectionObserver;
