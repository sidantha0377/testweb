import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="securx">Secure X</div>
      <div>
        <ul className="navlist">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#intro">Intro</a>
          </li>
          <li>
            <a href="#solarc">Sol. Architecture</a>
          </li>
          <li>
            <a href="#hard">Hard. & Soft. Designs</a>
          </li>
          <li>
            <a href="#test">Testing</a>
          </li>
          <li>
            <a href="#budget">Budget</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#links">Links</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
