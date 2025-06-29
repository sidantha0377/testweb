import React, { useEffect, useRef } from "react";
import "./Home.css";

export default function Home() {
  const bgRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = Math.max(1 - scrollY * 0.0005, 0.85);
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <div className="home-bg" ref={bgRef}></div>
      <div className="home-content">
        <div className="glass-box">
          <div className="bname">Secure X</div>
          <div className="htag">Smart Locker System</div>
        </div>
      </div>
    </div>
  );
}
