import { useEffect, useState } from "react";

export default function UseGetBrowserHeight() {
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // Check if window object exists (for browser environments)
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => {
        // cleanup
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return height;
}
