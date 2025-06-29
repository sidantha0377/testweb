import React from "react";
import "./Solarc.css";
import Im from "../assets/HighLevelArchitecture.jpg";

// Solution Architecture section
export default function Solarc() {
  return (
    <div className="solarc">
      <div className="iname">Solution Architecture</div>
      <div className="sim">
        <img src={Im} alt="High Level Architecture" className="solarc-img" />
      </div>
      <div className="architecture-desc">
        <p>
          This architecture integrates Web & Mobile Apps, a Cloud Database, and
          Locker Hardware to ensure secure and efficient locker management.
        </p>
        <ul>
          <li>
            <strong>Web App</strong> – Allows admins and users to manage
            lockers, track usage, and register users.
          </li>
          <li>
            <strong>Mobile App</strong> – Enables students to unlock lockers,
            check availability, and authenticate securely.
          </li>
          <li>
            <strong>Database (Cloud Storage)</strong> – Stores user data, locker
            status, and authentication credentials, ensuring real-time
            synchronization.
          </li>
          <li>
            <strong>Locker System (Hardware)</strong> – Equipped with
            microcontrollers and biometric scanners to authenticate users and
            unlock lockers.
          </li>
        </ul>

        <div className="workflow">
          <h3>Workflow</h3>
          <ol>
            <li>Users register via the Web or Mobile App.</li>
            <li>
              The Locker System verifies users via biometrics and communicates
              with the Database.
            </li>
            <li>
              If authenticated, the locker unlocks, updating the status across
              all systems.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
