import React from "react";
import "./Hard.css";
import Hs from "../assets/TechStack.jpg";
export default function Hard() {
  return (
    <div className="hard">
      <div className="iname">Hardware & Software Design</div>
      <div className="sim">
        <img src={Hs} alt="High Level Architecture" className="solarc-img" />
      </div>

      <div className="project-structure">
        <p>
          This project integrates hardware and software components to create a
          connected IoT system.
        </p>

        <h4>Hardware:</h4>
        <ul>
          <li>
            <strong>ESP32 Microcontroller</strong>: Collects data and controls
            devices via Wi-Fi; communicates with the backend using REST APIs.
          </li>
        </ul>

        <h4>Software:</h4>
        <ul>
          <li>
            <strong>Mobile App (Flutter)</strong>: A cross-platform app for user
            interaction with the system.
          </li>
          <li>
            <strong>Web Interface (React.js)</strong>: A browser-based dashboard
            for monitoring and managing the system.
          </li>
          <li>
            <strong>Backend (Spring Boot)</strong>: Handles all API requests,
            processes data, and manages system logic.
          </li>
          <li>
            <strong>Database (MySQL)</strong>: Stores user data, device logs,
            and configuration details in a structured relational format.
          </li>
        </ul>

        <p>
          All components communicate via RESTful APIs, with the backend acting
          as the central hub, ensuring secure and reliable data flow across the
          system.
        </p>
      </div>
    </div>
  );
}
