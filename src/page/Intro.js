import React from "react";
import "./Intro.css";
export default function Intro() {
  return (
    <div className="intro">
      <div className="iname">Introduction</div>
      <div className="icont">
        <p>
          The SmartSecure Locker System is a versatile and scalable IoT-based
          solution designed to provide secure and efficient storage in a variety
          of shared environments such as universities, gyms, offices and
          libraries. The system connects multiple locker locations, allowing
          users to check real-time availability via a mobile or web application.
          If lockers at a preferred location are fully occupied, the system
          intelligently suggests the nearest alternative location, offering a
          seamless and flexible user experience.
        </p>
        <p>
          Access is secured through a figerprint sensor, ensuring safety and
          convenience. Users can reserve lockers, receive notifications, and
          navigate to alternative locations with ease. Administrators can manage
          locker usage and monitor the system through a centralized dashboard.
          This solution reduces theft risks, optimizes locker utilization, and
          provides a modern, adaptable storage system suitable for various
          community-driven environments.
        </p>
      </div>
    </div>
  );
}
