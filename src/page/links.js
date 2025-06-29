import React from "react";
import "./links.css";
export default function links() {
  return (
    <div className="link">
      <div className="iname">Useful Link</div>
      <div className="buttonsec">
        <a href="https://github.com/cepdnaclk/e20-3yp-Smart-Locker-System">
          <button>Project Repository</button>
        </a>
        <a href="https://cepdnaclk.github.io/e20-3yp-Smart-Locker-System/">
          <button>Project Page</button>
        </a>
        <a href="https://www.ce.pdn.ac.lk/">
          <button>Department of Computer Engineering</button>
        </a>
        <a href="https://eng.pdn.ac.lk/">
          <button>University of Peradeniya</button>
        </a>
      </div>
    </div>
  );
}
